FROM node:20.18.0

WORKDIR /quiz-app

COPY ./docker ./docker
COPY ./prisma ./prisma
COPY ./build ./build
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./.env ./.env

# Instalar dependências de produção
RUN npm ci --only=production

# Criação de um usuário não-root
RUN useradd -m nodeuser

# Define as permissões adequadas para o diretório de trabalho
RUN chown -R nodeuser:nodeuser /quiz-app

# Muda para o usuário não-root
USER nodeuser

# Define a variável de ambiente NODE_ENV como production
ENV NODE_ENV=production

# Executa o Node.js com o script especificado
ENTRYPOINT ["sh", "-c", "node ./setup/index.js"]
