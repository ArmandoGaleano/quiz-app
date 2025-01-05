/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/application/quiz/services/QuizService.ts":
/*!******************************************************!*\
  !*** ./src/application/quiz/services/QuizService.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizService: () => (/* binding */ QuizService)\n/* harmony export */ });\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n/* harmony import */ var _core_validation_zod_quiz_QuizRepositoryValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/validation/zod/quiz/QuizRepositoryValidation */ \"./src/core/validation/zod/quiz/QuizRepositoryValidation.ts\");\n/* harmony import */ var _core_errors_services_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/errors/services/question */ \"./src/core/errors/services/question/index.ts\");\n\n\n\nclass QuizService {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n    }\n    async createQuiz(props) {\n        try {\n            const validatedData = new _core_validation_zod_quiz_QuizRepositoryValidation__WEBPACK_IMPORTED_MODULE_1__.QuizRepositoryValidation(props).validate();\n            const response = await this.quizRepository.create(validatedData);\n            if (response.success) {\n                console.log('Quiz criado com sucesso!');\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 201 });\n            }\n            console.log('Erro ao criar quiz:');\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 400 });\n        }\n        catch (error) {\n            const isKnownError = Object.values(_core_errors_services_question__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                console.error('Houve um erro conhecido:');\n                console.error(error);\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    statusCode: 400,\n                    message: error.message,\n                });\n            }\n            console.error('Erro desconhecido:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async getAll() {\n        const { data, success } = await this.quizRepository.getAll();\n        if (success) {\n            console.log('Quizzes retornados com sucesso!');\n            console.log({ data });\n            return {\n                success,\n                data,\n            };\n        }\n        console.error('Erro ao retornar quizzes!');\n        return {\n            success,\n            data,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/services/QuizService.ts?");

/***/ }),

/***/ "./src/core/entities/RepositoryEntity.ts":
/*!***********************************************!*\
  !*** ./src/core/entities/RepositoryEntity.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RepositoryEntity: () => (/* binding */ RepositoryEntity)\n/* harmony export */ });\nclass RepositoryEntity {\n    get prisma() {\n        return this._prisma;\n    }\n    constructor({ prismaClient }) {\n        this._prisma = prismaClient;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/entities/RepositoryEntity.ts?");

/***/ }),

/***/ "./src/core/entities/ZodValidation.ts":
/*!********************************************!*\
  !*** ./src/core/entities/ZodValidation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ZodValidation: () => (/* binding */ ZodValidation)\n/* harmony export */ });\nclass ZodValidation {\n    get schema() {\n        return this._schema;\n    }\n    get data() {\n        return this._data;\n    }\n    constructor(props) {\n        this._schema = props.schema;\n        this._data = props.data;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/entities/ZodValidation.ts?");

/***/ }),

/***/ "./src/core/errors/http/HttpError.ts":
/*!*******************************************!*\
  !*** ./src/core/errors/http/HttpError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpError: () => (/* binding */ HttpError)\n/* harmony export */ });\nclass HttpError extends Error {\n    constructor({ message, statusCode }) {\n        super(message);\n        this.name = 'HttpError';\n        this.statusCode = statusCode;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/HttpError.ts?");

/***/ }),

/***/ "./src/core/errors/http/internal-server-error.ts":
/*!*******************************************************!*\
  !*** ./src/core/errors/http/internal-server-error.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InternalServerError: () => (/* binding */ InternalServerError)\n/* harmony export */ });\n/* harmony import */ var _HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpError */ \"./src/core/errors/http/HttpError.ts\");\n\nclass InternalServerError extends _HttpError__WEBPACK_IMPORTED_MODULE_0__.HttpError {\n    constructor(message) {\n        super({\n            message: message ?? 'Internal server error',\n            statusCode: 500,\n        });\n        this.name = 'InternalServerError';\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/internal-server-error.ts?");

/***/ }),

/***/ "./src/core/errors/http/invalid-request-body-error.ts":
/*!************************************************************!*\
  !*** ./src/core/errors/http/invalid-request-body-error.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InvalidRequestBodyError: () => (/* binding */ InvalidRequestBodyError)\n/* harmony export */ });\n/* harmony import */ var _HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpError */ \"./src/core/errors/http/HttpError.ts\");\n\nclass InvalidRequestBodyError extends _HttpError__WEBPACK_IMPORTED_MODULE_0__.HttpError {\n    constructor(message) {\n        super({\n            message: message ?? 'Request body is not in the correct format',\n            statusCode: 400,\n        });\n        this.name = 'InvalidRequestBodyError';\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/invalid-request-body-error.ts?");

/***/ }),

/***/ "./src/core/errors/http/knownErrors.ts":
/*!*********************************************!*\
  !*** ./src/core/errors/http/knownErrors.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knownErrors: () => (/* binding */ knownErrors)\n/* harmony export */ });\n/* harmony import */ var _invalid_request_body_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n\nconst knownErrors = [\n    _invalid_request_body_error__WEBPACK_IMPORTED_MODULE_0__.InvalidRequestBodyError,\n];\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/knownErrors.ts?");

/***/ }),

/***/ "./src/core/errors/services/question/index.ts":
/*!****************************************************!*\
  !*** ./src/core/errors/services/question/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _quiz_schema_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-schema-error */ \"./src/core/errors/services/question/quiz-schema-error.ts\");\n\nconst knowErrors = { QuizSchemaError: _quiz_schema_error__WEBPACK_IMPORTED_MODULE_0__.QuizSchemaError };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knowErrors);\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/services/question/index.ts?");

/***/ }),

/***/ "./src/core/errors/services/question/quiz-schema-error.ts":
/*!****************************************************************!*\
  !*** ./src/core/errors/services/question/quiz-schema-error.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizSchemaError: () => (/* binding */ QuizSchemaError)\n/* harmony export */ });\nclass QuizSchemaError extends Error {\n    constructor(message) {\n        super(message ?? 'Quiz schema is invalid');\n        this.name = 'QuizSchemaError';\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/services/question/quiz-schema-error.ts?");

/***/ }),

/***/ "./src/core/responses/RepositoryResponse.ts":
/*!**************************************************!*\
  !*** ./src/core/responses/RepositoryResponse.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RepositoryResponse: () => (/* binding */ RepositoryResponse)\n/* harmony export */ });\nclass RepositoryResponse {\n    get statusCode() {\n        return this._statusCode;\n    }\n    get message() {\n        return this._message;\n    }\n    get success() {\n        return this._success;\n    }\n    get data() {\n        return this._data;\n    }\n    constructor(_props) {\n        this._statusCode = _props.statusCode;\n        this._message = _props.message;\n        this._success = RepositoryResponse.checkSuccessStatus(_props.statusCode);\n        this._data = _props.data ? _props.data : undefined;\n    }\n    static checkSuccessStatus(statusCode) {\n        return statusCode >= 200 && statusCode < 300;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/responses/RepositoryResponse.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/QuizRepositoryValidation.ts":
/*!******************************************************************!*\
  !*** ./src/core/validation/zod/quiz/QuizRepositoryValidation.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizRepositoryValidation: () => (/* binding */ QuizRepositoryValidation)\n/* harmony export */ });\n/* harmony import */ var _entities_ZodValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../entities/ZodValidation */ \"./src/core/entities/ZodValidation.ts\");\n/* harmony import */ var _errors_services_question_quiz_schema_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../errors/services/question/quiz-schema-error */ \"./src/core/errors/services/question/quiz-schema-error.ts\");\n/* harmony import */ var _schema_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema/question */ \"./src/core/validation/zod/quiz/schema/question.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass QuizRepositoryValidation extends _entities_ZodValidation__WEBPACK_IMPORTED_MODULE_0__.ZodValidation {\n    constructor(data) {\n        super({\n            schema: _schema_question__WEBPACK_IMPORTED_MODULE_2__.questionSchema,\n            data,\n        });\n    }\n    validate() {\n        try {\n            const validatedData = this.schema.parse(this.data);\n            return validatedData;\n        }\n        catch (error) {\n            if (error instanceof (zod__WEBPACK_IMPORTED_MODULE_3___default().ZodError)) {\n                throw new _errors_services_question_quiz_schema_error__WEBPACK_IMPORTED_MODULE_1__.QuizSchemaError(error.message);\n            }\n            return undefined;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/QuizRepositoryValidation.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/schema/keyword.ts":
/*!********************************************************!*\
  !*** ./src/core/validation/zod/quiz/schema/keyword.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keywordSchema: () => (/* binding */ keywordSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n\nconst keywordSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.string().uuid().optional(),\n    text: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n});\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/schema/keyword.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/schema/question.ts":
/*!*********************************************************!*\
  !*** ./src/core/validation/zod/quiz/schema/question.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuestionType: () => (/* binding */ QuestionType),\n/* harmony export */   questionSchema: () => (/* binding */ questionSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyword */ \"./src/core/validation/zod/quiz/schema/keyword.ts\");\n\n\nvar QuestionType;\n(function (QuestionType) {\n    QuestionType[\"MULTIPLE_CHOICE\"] = \"MULTIPLE_CHOICE\";\n    QuestionType[\"ONE_CHOICE\"] = \"ONE_CHOICE\";\n})(QuestionType || (QuestionType = {}));\nconst questionSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    slug: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    title: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    shortDescription: zod__WEBPACK_IMPORTED_MODULE_0__.string().default('Sem descrição'),\n    questionStatement: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    active: zod__WEBPACK_IMPORTED_MODULE_0__.boolean().default(false),\n    type: zod__WEBPACK_IMPORTED_MODULE_0__.nativeEnum(QuestionType),\n    alternatives: zod__WEBPACK_IMPORTED_MODULE_0__.array(zod__WEBPACK_IMPORTED_MODULE_0__.object({\n        text: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n        isCorrect: zod__WEBPACK_IMPORTED_MODULE_0__.boolean().default(false),\n    }))\n        .default([]),\n    keywords: zod__WEBPACK_IMPORTED_MODULE_0__.array(_keyword__WEBPACK_IMPORTED_MODULE_1__.keywordSchema).default([]),\n});\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/schema/question.ts?");

/***/ }),

/***/ "./src/infrastructure/http/HttpController.ts":
/*!***************************************************!*\
  !*** ./src/infrastructure/http/HttpController.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpController: () => (/* binding */ HttpController)\n/* harmony export */ });\nclass HttpController {\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/HttpController.ts?");

/***/ }),

/***/ "./src/infrastructure/http/HttpResponseHandlers.ts":
/*!*********************************************************!*\
  !*** ./src/infrastructure/http/HttpResponseHandlers.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse),\n/* harmony export */   HttpResponseHandler: () => (/* binding */ HttpResponseHandler)\n/* harmony export */ });\nclass HttpResponse {\n    constructor(props) {\n        this.errors = [];\n        this.knownErrors = [];\n        this.request = props.request;\n        this.reply = props.reply;\n        this.knownErrors = props.knownErrors ?? [];\n        this.controller = props.controller;\n    }\n    async execute() {\n        return new Promise(this.handleRequestError.bind(this));\n    }\n    async handleRequestError(resolve, reject) {\n        const dispatchHttpError = (error) => {\n            this.errors.push(error);\n            reject(error);\n        };\n        try {\n            await this.controller(this.request, this.reply, dispatchHttpError);\n            resolve();\n        }\n        catch (error) {\n            const isKnownError = this.knownErrors.some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                reject({ message: error.message, statusCode: error.statusCode });\n            }\n            reject({ message: 'Internal server error!', statusCode: 500 });\n        }\n    }\n}\nfunction HttpResponseHandler(controller, knownErrors) {\n    return async (request, reply) => {\n        try {\n            await new HttpResponse({\n                request,\n                reply,\n                knownErrors,\n                controller,\n            }).execute();\n        }\n        catch (error) {\n            console.log('Ponta do HTTP');\n            console.error('Erro desconhecido:');\n            console.error(error);\n            if (typeof error?.statusCode === 'number') {\n                reply.status(error.statusCode).send({ message: error.message ?? '' });\n                return;\n            }\n            reply.status(500).send({ message: 'Internal server error!' });\n        }\n    };\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/HttpResponseHandlers.ts?");

/***/ }),

/***/ "./src/infrastructure/http/controllers/private/quiz/createNewQuiz.ts":
/*!***************************************************************************!*\
  !*** ./src/infrastructure/http/controllers/private/quiz/createNewQuiz.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateNewQuizController: () => (/* binding */ CreateNewQuizController)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpController */ \"./src/infrastructure/http/HttpController.ts\");\n/* harmony import */ var _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/application/quiz/services/QuizService */ \"./src/application/quiz/services/QuizService.ts\");\n/* harmony import */ var _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/persistence/QuizRepository */ \"./src/infrastructure/persistence/QuizRepository.ts\");\n/* harmony import */ var _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/errors/http/HttpError */ \"./src/core/errors/http/HttpError.ts\");\n/* harmony import */ var _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/errors/http/internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/errors/http/invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n\n\n\n\n\n\nclass CreateNewQuizController extends _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__.HttpController {\n    async handle(request, reply, dispatchHttpError) {\n        const { body } = request;\n        if (typeof body !== 'object') {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_5__.InvalidRequestBodyError());\n            return;\n        }\n        const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__.QuizRepository();\n        const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.QuizService(quizRepository);\n        const { statusCode, success, message, data } = await quizService.createQuiz(body);\n        if (success) {\n            console.info({ data });\n            reply.status(statusCode).send({ message: 'Quiz criado com sucesso!' });\n            return;\n        }\n        if (statusCode === 400) {\n            dispatchHttpError(new _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__.HttpError({\n                statusCode: 400,\n                ...(typeof message === 'string' ? { message } : {}),\n            }));\n        }\n        dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__.InternalServerError('Erro ao criar quiz!'));\n    }\n    async getTeste(_request, reply) {\n        try {\n            const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__.QuizRepository();\n            const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.QuizService(quizRepository);\n            const data = await quizService.getAll();\n            reply\n                .status(200)\n                .header('Content-Type', 'application/json; charset=utf-8')\n                .send({ data });\n        }\n        catch (error) {\n            console.error('Erro ao buscar quizzes', error);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/controllers/private/quiz/createNewQuiz.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/apis/private/index.ts":
/*!**************************************************************!*\
  !*** ./src/infrastructure/http/routes/apis/private/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   privateRoutes: () => (/* binding */ privateRoutes)\n/* harmony export */ });\n/* harmony import */ var _quizRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizRoutes */ \"./src/infrastructure/http/routes/apis/private/quizRoutes.ts\");\n\nasync function privateRoutes(app) {\n    app.register(_quizRoutes__WEBPACK_IMPORTED_MODULE_0__.quizRoutes, {\n        prefix: '/quiz',\n    });\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/apis/private/index.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/apis/private/quizRoutes.ts":
/*!*******************************************************************!*\
  !*** ./src/infrastructure/http/routes/apis/private/quizRoutes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   quizRoutes: () => (/* binding */ quizRoutes)\n/* harmony export */ });\n/* harmony import */ var _controllers_private_quiz_createNewQuiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../controllers/private/quiz/createNewQuiz */ \"./src/infrastructure/http/controllers/private/quiz/createNewQuiz.ts\");\n/* harmony import */ var _HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../HttpResponseHandlers */ \"./src/infrastructure/http/HttpResponseHandlers.ts\");\n/* harmony import */ var _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/errors/http/knownErrors */ \"./src/core/errors/http/knownErrors.ts\");\n\n\n\n// \"/_v/api/private/quiz/.../...\"\nasync function quizRoutes(app) {\n    app.post('/create', (0,_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_1__.HttpResponseHandler)(new _controllers_private_quiz_createNewQuiz__WEBPACK_IMPORTED_MODULE_0__.CreateNewQuizController().handle, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_2__.knownErrors));\n    app.get('/getAll', (0,_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_1__.HttpResponseHandler)(new _controllers_private_quiz_createNewQuiz__WEBPACK_IMPORTED_MODULE_0__.CreateNewQuizController().getTeste, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_2__.knownErrors));\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/apis/private/quizRoutes.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/apis/registerApiRoutes.ts":
/*!******************************************************************!*\
  !*** ./src/infrastructure/http/routes/apis/registerApiRoutes.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerApiRoutes: () => (/* binding */ registerApiRoutes)\n/* harmony export */ });\n/* harmony import */ var _private_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/index */ \"./src/infrastructure/http/routes/apis/private/index.ts\");\n\n// import { publicRoutes } from './public/index';\nasync function registerApiRoutes(app) {\n    app.register(_private_index__WEBPACK_IMPORTED_MODULE_0__.privateRoutes, {\n        prefix: '/private',\n    });\n    // app.register(privateRoutes, {\n    //   prefix: '/public',\n    // });\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/apis/registerApiRoutes.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/registerRoutes.ts":
/*!**********************************************************!*\
  !*** ./src/infrastructure/http/routes/registerRoutes.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerRoutes: () => (/* binding */ registerRoutes)\n/* harmony export */ });\n/* harmony import */ var _apis_registerApiRoutes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apis/registerApiRoutes */ \"./src/infrastructure/http/routes/apis/registerApiRoutes.ts\");\n\nasync function registerRoutes(app) {\n    app.register(_apis_registerApiRoutes__WEBPACK_IMPORTED_MODULE_0__.registerApiRoutes, {\n        prefix: '/_v/api',\n    });\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/registerRoutes.ts?");

/***/ }),

/***/ "./src/infrastructure/http/server.ts":
/*!*******************************************!*\
  !*** ./src/infrastructure/http/server.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fastify */ \"fastify\");\n/* harmony import */ var fastify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fastify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _routes_registerRoutes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/registerRoutes */ \"./src/infrastructure/http/routes/registerRoutes.ts\");\n\n\nconst app = fastify__WEBPACK_IMPORTED_MODULE_0___default()();\napp.register(_routes_registerRoutes__WEBPACK_IMPORTED_MODULE_1__.registerRoutes);\napp\n    .listen({\n    port: 3000,\n    host: '0.0.0.0',\n})\n    .then(() => {\n    console.log('Server started on port 3000');\n});\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/server.ts?");

/***/ }),

/***/ "./src/infrastructure/persistence/PrismaClientProvider.ts":
/*!****************************************************************!*\
  !*** ./src/infrastructure/persistence/PrismaClientProvider.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PrismaClientProvider: () => (/* binding */ PrismaClientProvider)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nclass PrismaClientProvider {\n    static getInstance(DATABASE_URL) {\n        if (!PrismaClientProvider.instance) {\n            PrismaClientProvider.instance = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n                datasources: {\n                    db: {\n                        url: DATABASE_URL,\n                    },\n                },\n            });\n        }\n        return PrismaClientProvider.instance;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/persistence/PrismaClientProvider.ts?");

/***/ }),

/***/ "./src/infrastructure/persistence/QuizRepository.ts":
/*!**********************************************************!*\
  !*** ./src/infrastructure/persistence/QuizRepository.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizRepository: () => (/* binding */ QuizRepository)\n/* harmony export */ });\n/* harmony import */ var _core_entities_RepositoryEntity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/entities/RepositoryEntity */ \"./src/core/entities/RepositoryEntity.ts\");\n/* harmony import */ var _PrismaClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrismaClientProvider */ \"./src/infrastructure/persistence/PrismaClientProvider.ts\");\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n\n\n\nclass QuizRepository extends _core_entities_RepositoryEntity__WEBPACK_IMPORTED_MODULE_0__.RepositoryEntity {\n    constructor() {\n        super({\n            prismaClient: _PrismaClientProvider__WEBPACK_IMPORTED_MODULE_1__.PrismaClientProvider.getInstance(process.env.DATABASE_URL),\n        });\n    }\n    async getAll() {\n        try {\n            const data = await this.prisma.question.findMany({\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 200, data });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [getAll]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async create(props) {\n        try {\n            await this.prisma.question.create({\n                data: {\n                    slug: props.slug,\n                    title: props.title,\n                    shortDescription: props.shortDescription,\n                    questionStatement: props.questionStatement,\n                    active: props.active,\n                    type: props.type,\n                    alternatives: {\n                        createMany: {\n                            data: props.alternatives,\n                        },\n                    },\n                    keywords: {\n                        connectOrCreate: props.keywords.map((keyword) => ({\n                            where: { text: keyword.text },\n                            create: { text: keyword.text },\n                        })),\n                    },\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 201 });\n        }\n        catch (error) {\n            console.error('Quiz Repository');\n            console.error('Create Quiz Error:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 400 });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/persistence/QuizRepository.ts?");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "fastify":
/*!**************************!*\
  !*** external "fastify" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("fastify");

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("zod");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./src/infrastructure/http/server.ts");
/******/ 
