FROM node:20.18.0

WORKDIR /quiz-app

COPY ./build ./build
COPY ./docker ./docker
COPY ./prisma ./prisma
COPY ./setup ./setup
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./.env ./.env

# Instalar cron
RUN apt-get update && apt-get install -y cron

# Criar arquivo de log para cron
RUN touch /var/log/cron.log

# Copiar arquivo de crontab
COPY ./docker/cron/generate-cert /etc/cron.d/generate-cert

# Configurar permissões no arquivo de cron
RUN chmod 0644 /etc/cron.d/generate-cert

# Registrar o cron job no crontab
RUN crontab /etc/cron.d/generate-cert

# Instalar dependências de produção
RUN npm ci --omit=dev

# Criação de um usuário não-root
RUN useradd -m nodeuser

# Define as permissões adequadas para o diretório de trabalho
RUN chown -R nodeuser:nodeuser /quiz-app/build

# Define a variável de ambiente NODE_ENV como production
ENV NODE_ENV=production

# Iniciar cron como root e Node.js como nodeuser
CMD ["sh", "-c", "cron && su nodeuser -c 'node ./setup/index.js'"]
