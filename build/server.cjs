/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/application/quiz/dtos/CreateQuizDTO.ts":
/*!****************************************************!*\
  !*** ./src/application/quiz/dtos/CreateQuizDTO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateQuizDTO: () => (/* binding */ CreateQuizDTO)\n/* harmony export */ });\nclass CreateQuizDTO {\n    constructor(props) {\n        this.slug = props.slug;\n        this.title = props.title;\n        this.shortDescription = props.shortDescription;\n        this.questionStatement = props.questionStatement;\n        this.active = props.active;\n        this.type = props.type;\n        this.alternatives = props.alternatives;\n        this.keywords = props.keywords;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/dtos/CreateQuizDTO.ts?");

/***/ }),

/***/ "./src/application/quiz/dtos/DeleteQuizDTO.ts":
/*!****************************************************!*\
  !*** ./src/application/quiz/dtos/DeleteQuizDTO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteQuizDTO: () => (/* binding */ DeleteQuizDTO)\n/* harmony export */ });\nclass DeleteQuizDTO {\n    constructor(props) {\n        this.id = props.id;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/dtos/DeleteQuizDTO.ts?");

/***/ }),

/***/ "./src/application/quiz/dtos/GetQuizDTO.ts":
/*!*************************************************!*\
  !*** ./src/application/quiz/dtos/GetQuizDTO.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetQuizDTO: () => (/* binding */ GetQuizDTO)\n/* harmony export */ });\nclass GetQuizDTO {\n    constructor(props) {\n        this.id = props.id;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/dtos/GetQuizDTO.ts?");

/***/ }),

/***/ "./src/application/quiz/dtos/UpdateQuizDTO.ts":
/*!****************************************************!*\
  !*** ./src/application/quiz/dtos/UpdateQuizDTO.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UpdateQuizDTO: () => (/* binding */ UpdateQuizDTO)\n/* harmony export */ });\nclass UpdateQuizDTO {\n    constructor(props) {\n        this.id = props.id;\n        this.slug = props.slug;\n        this.title = props.title;\n        this.shortDescription = props.shortDescription;\n        this.questionStatement = props.questionStatement;\n        this.active = props.active;\n        this.type = props.type;\n        this.alternatives = props.alternatives;\n        this.keywords = props.keywords;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/dtos/UpdateQuizDTO.ts?");

/***/ }),

/***/ "./src/application/quiz/services/QuizService.ts":
/*!******************************************************!*\
  !*** ./src/application/quiz/services/QuizService.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizService: () => (/* binding */ QuizService)\n/* harmony export */ });\n/* harmony import */ var _application_quiz_use_cases_CreateQuizUseCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/application/quiz/use-cases/CreateQuizUseCase */ \"./src/application/quiz/use-cases/CreateQuizUseCase.ts\");\n/* harmony import */ var _application_quiz_use_cases_GetQuizUseCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/application/quiz/use-cases/GetQuizUseCase */ \"./src/application/quiz/use-cases/GetQuizUseCase.ts\");\n/* harmony import */ var _application_quiz_use_cases_UpdateQuizUseCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/application/quiz/use-cases/UpdateQuizUseCase */ \"./src/application/quiz/use-cases/UpdateQuizUseCase.ts\");\n/* harmony import */ var _application_quiz_use_cases_DeleteQuizUseCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/application/quiz/use-cases/DeleteQuizUseCase */ \"./src/application/quiz/use-cases/DeleteQuizUseCase.ts\");\n\n\n\n\nclass QuizService {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n        this.CreateQuizUseCase = new _application_quiz_use_cases_CreateQuizUseCase__WEBPACK_IMPORTED_MODULE_0__.CreateQuizUseCase(quizRepository);\n        this.GetQuizUseCase = new _application_quiz_use_cases_GetQuizUseCase__WEBPACK_IMPORTED_MODULE_1__.GetQuizUseCase(quizRepository);\n        this.UpdateQuizUseCase = new _application_quiz_use_cases_UpdateQuizUseCase__WEBPACK_IMPORTED_MODULE_2__.UpdateQuizUseCase(quizRepository);\n        this.DeleteQuizUseCase = new _application_quiz_use_cases_DeleteQuizUseCase__WEBPACK_IMPORTED_MODULE_3__.DeleteQuizUseCase(quizRepository);\n    }\n    async createQuiz(dto) {\n        return this.CreateQuizUseCase.execute(dto);\n    }\n    async getQuiz(dto) {\n        return this.GetQuizUseCase.execute(dto);\n    }\n    async updateQuiz(dto) {\n        return this.UpdateQuizUseCase.execute(dto);\n    }\n    async deleteQuiz(dto) {\n        return this.DeleteQuizUseCase.execute(dto);\n    }\n    async getAll() {\n        const { data, success } = await this.quizRepository.getAll();\n        if (success) {\n            return {\n                success,\n                data,\n            };\n        }\n        console.error('Erro ao retornar quizzes!');\n        return {\n            success,\n            data,\n        };\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/services/QuizService.ts?");

/***/ }),

/***/ "./src/application/quiz/use-cases/CreateQuizUseCase.ts":
/*!*************************************************************!*\
  !*** ./src/application/quiz/use-cases/CreateQuizUseCase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateQuizUseCase: () => (/* binding */ CreateQuizUseCase)\n/* harmony export */ });\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n/* harmony import */ var _core_validation_zod_quiz_CreateQuizValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/validation/zod/quiz/CreateQuizValidation */ \"./src/core/validation/zod/quiz/CreateQuizValidation.ts\");\n/* harmony import */ var _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/errors/http/knownErrors */ \"./src/core/errors/http/knownErrors.ts\");\n\n\n\nclass CreateQuizUseCase {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n    }\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    async execute(dto) {\n        try {\n            const validatedDto = new _core_validation_zod_quiz_CreateQuizValidation__WEBPACK_IMPORTED_MODULE_1__.CreateQuizValidation(dto).validate();\n            const { questionExists, questionExistsSuccess } = await this.checkIfQuestionExists(validatedDto);\n            if (!questionExistsSuccess) {\n                console.error('Erro ao verificar se a questão existe');\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n            }\n            if (questionExists) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    message: 'Questão já existente!',\n                    statusCode: 400,\n                });\n            }\n            const response = await this.quizRepository.create(validatedDto);\n            return response;\n        }\n        catch (error) {\n            const isKnownError = Object.values(_core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_2__.knownErrors).some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                console.error('Houve um erro conhecido:');\n                console.error(error);\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    statusCode: 400,\n                    message: error.message,\n                });\n            }\n            console.error('Erro desconhecido:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async checkIfQuestionExists(validatedDto) {\n        try {\n            const findQuestionSlug = await this.quizRepository.search({\n                props: {\n                    slug: validatedDto.slug,\n                },\n            });\n            const findQuestionTitle = await this.quizRepository.search({\n                props: {\n                    title: validatedDto.title,\n                },\n            });\n            if ((typeof findQuestionSlug?.data?.length === 'number' &&\n                findQuestionSlug?.data?.length > 0) ||\n                (typeof findQuestionTitle?.data?.length === 'number' &&\n                    findQuestionTitle?.data?.length > 0)) {\n                return {\n                    questionExistsSuccess: true,\n                    questionExists: true,\n                };\n            }\n            return {\n                questionExistsSuccess: true,\n                questionExists: false,\n            };\n        }\n        catch (error) {\n            console.error('Erro ao verificar se a questão existe:');\n            console.error(error);\n            return {\n                questionExistsSuccess: false,\n                questionExists: false,\n            };\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/use-cases/CreateQuizUseCase.ts?");

/***/ }),

/***/ "./src/application/quiz/use-cases/DeleteQuizUseCase.ts":
/*!*************************************************************!*\
  !*** ./src/application/quiz/use-cases/DeleteQuizUseCase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteQuizUseCase: () => (/* binding */ DeleteQuizUseCase)\n/* harmony export */ });\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n/* harmony import */ var _core_errors_services_QuizService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/errors/services/QuizService */ \"./src/core/errors/services/QuizService/index.ts\");\n/* harmony import */ var _core_validation_zod_quiz_DeleteQuizValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/validation/zod/quiz/DeleteQuizValidation */ \"./src/core/validation/zod/quiz/DeleteQuizValidation.ts\");\n\n\n\nclass DeleteQuizUseCase {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n    }\n    async execute(dto) {\n        try {\n            const validatedDto = new _core_validation_zod_quiz_DeleteQuizValidation__WEBPACK_IMPORTED_MODULE_2__.DeleteQuizValidation(dto).validate();\n            const { questionExists, questionExistsSuccess } = await this.checkIfQuestionExists(validatedDto);\n            if (!questionExistsSuccess) {\n                console.error('Erro ao verificar se a questão existe');\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n            }\n            if (!questionExists) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    message: 'Questão não encontrada!',\n                    statusCode: 400,\n                });\n            }\n            const response = await this.quizRepository.delete(validatedDto);\n            return response;\n        }\n        catch (error) {\n            const isKnownError = Object.values(_core_errors_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.knownErrors).some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                console.error('Houve um erro conhecido:');\n                console.error(error);\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    statusCode: 400,\n                    message: error.message,\n                });\n            }\n            console.error('Erro desconhecido:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async checkIfQuestionExists(validatedDto) {\n        try {\n            const findQuestionId = await this.quizRepository.search({\n                props: {\n                    id: validatedDto.id,\n                },\n            });\n            if (typeof findQuestionId?.data?.length === 'number' &&\n                findQuestionId?.data?.length > 0) {\n                return {\n                    questionExistsSuccess: true,\n                    questionExists: true,\n                };\n            }\n            return {\n                questionExistsSuccess: true,\n                questionExists: false,\n            };\n        }\n        catch (error) {\n            console.error('Erro ao verificar se a questão existe:');\n            console.error(error);\n            return {\n                questionExistsSuccess: false,\n                questionExists: false,\n            };\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/use-cases/DeleteQuizUseCase.ts?");

/***/ }),

/***/ "./src/application/quiz/use-cases/GetQuizUseCase.ts":
/*!**********************************************************!*\
  !*** ./src/application/quiz/use-cases/GetQuizUseCase.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetQuizUseCase: () => (/* binding */ GetQuizUseCase)\n/* harmony export */ });\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n/* harmony import */ var _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/errors/http/knownErrors */ \"./src/core/errors/http/knownErrors.ts\");\n\n\nclass GetQuizUseCase {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n    }\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    async execute(dto) {\n        try {\n            if (!dto?.id?.trim()?.length) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    message: 'ID do quiz não informado!',\n                    statusCode: 400,\n                });\n            }\n            const response = await this.quizRepository.findUniqueById(dto.id);\n            return response;\n        }\n        catch (error) {\n            const isKnownError = Object.values(_core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_1__.knownErrors).some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                console.error('Houve um erro conhecido:');\n                console.error(error);\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    statusCode: 400,\n                    message: error.message,\n                });\n            }\n            console.error('Erro desconhecido:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/use-cases/GetQuizUseCase.ts?");

/***/ }),

/***/ "./src/application/quiz/use-cases/UpdateQuizUseCase.ts":
/*!*************************************************************!*\
  !*** ./src/application/quiz/use-cases/UpdateQuizUseCase.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UpdateQuizUseCase: () => (/* binding */ UpdateQuizUseCase)\n/* harmony export */ });\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n/* harmony import */ var _core_errors_services_QuizService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/errors/services/QuizService */ \"./src/core/errors/services/QuizService/index.ts\");\n/* harmony import */ var _core_validation_zod_quiz_UpdateQuizValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/validation/zod/quiz/UpdateQuizValidation */ \"./src/core/validation/zod/quiz/UpdateQuizValidation.ts\");\n\n\n\nclass UpdateQuizUseCase {\n    constructor(quizRepository) {\n        this.quizRepository = quizRepository;\n    }\n    async execute(dto) {\n        try {\n            const validatedDto = new _core_validation_zod_quiz_UpdateQuizValidation__WEBPACK_IMPORTED_MODULE_2__.UpdateQuizValidation(dto).validate();\n            const { questionExists, questionExistsSuccess } = await this.checkIfQuestionExists(validatedDto);\n            if (!questionExistsSuccess) {\n                console.error('Erro ao verificar se a questão existe');\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n            }\n            if (!questionExists) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    message: 'Questão não encontrada!',\n                    statusCode: 400,\n                });\n            }\n            const { hasConflic, hasConflicSuccess } = await this.checkIfQuestionConflicts(validatedDto);\n            if (!hasConflicSuccess) {\n                console.error('Erro ao verificar se a questão existe');\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n            }\n            if (hasConflic) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    message: 'Questão já existente!',\n                    statusCode: 409, // Conflict\n                });\n            }\n            const response = await this.quizRepository.update(validatedDto);\n            return response;\n        }\n        catch (error) {\n            const isKnownError = Object.values(_core_errors_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.knownErrors).some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                console.error('Houve um erro conhecido:');\n                console.error(error);\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({\n                    statusCode: 400,\n                    message: error.message,\n                });\n            }\n            console.error('Erro desconhecido:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_0__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async checkIfQuestionExists(validatedDto) {\n        try {\n            const findQuestionId = await this.quizRepository.search({\n                props: {\n                    id: validatedDto.id,\n                },\n            });\n            if (typeof findQuestionId?.data?.length === 'number' &&\n                findQuestionId?.data?.length > 0) {\n                return {\n                    questionExistsSuccess: true,\n                    questionExists: true,\n                };\n            }\n            return {\n                questionExistsSuccess: true,\n                questionExists: false,\n            };\n        }\n        catch (error) {\n            console.error('Erro ao verificar se a questão existe:');\n            console.error(error);\n            return {\n                questionExistsSuccess: false,\n                questionExists: false,\n            };\n        }\n    }\n    async checkIfQuestionConflicts(validatedDto) {\n        try {\n            const findQuestionSlug = await this.quizRepository.search({\n                props: {\n                    slug: validatedDto.slug,\n                },\n                notProps: {\n                    id: validatedDto.id,\n                },\n            });\n            const findQuestionTitle = await this.quizRepository.search({\n                props: {\n                    title: validatedDto.title,\n                },\n                notProps: {\n                    id: validatedDto.id,\n                },\n            });\n            if ((typeof findQuestionSlug?.data?.length === 'number' &&\n                findQuestionSlug?.data?.length > 0) ||\n                (typeof findQuestionTitle?.data?.length === 'number' &&\n                    findQuestionTitle?.data?.length > 0)) {\n                return {\n                    hasConflicSuccess: true,\n                    hasConflic: true,\n                };\n            }\n            return {\n                hasConflicSuccess: true,\n                hasConflic: false,\n            };\n        }\n        catch (error) {\n            console.error('Erro ao verificar se a questão existe:');\n            console.error(error);\n            return {\n                hasConflicSuccess: false,\n                hasConflic: false,\n            };\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/application/quiz/use-cases/UpdateQuizUseCase.ts?");

/***/ }),

/***/ "./src/core/abstraction/BaseRepository.ts":
/*!************************************************!*\
  !*** ./src/core/abstraction/BaseRepository.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseRepository: () => (/* binding */ BaseRepository)\n/* harmony export */ });\nclass BaseRepository {\n    get prisma() {\n        return this._prisma;\n    }\n    constructor({ prismaClient }) {\n        this._prisma = prismaClient;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/abstraction/BaseRepository.ts?");

/***/ }),

/***/ "./src/core/abstraction/BaseZodValidation.ts":
/*!***************************************************!*\
  !*** ./src/core/abstraction/BaseZodValidation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BaseZodValidation: () => (/* binding */ BaseZodValidation)\n/* harmony export */ });\nclass BaseZodValidation {\n    get schema() {\n        return this._schema;\n    }\n    get data() {\n        return this._data;\n    }\n    constructor(props) {\n        this._schema = props.schema;\n        this._data = props.data;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/abstraction/BaseZodValidation.ts?");

/***/ }),

/***/ "./src/core/errors/http/HttpError.ts":
/*!*******************************************!*\
  !*** ./src/core/errors/http/HttpError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpError: () => (/* binding */ HttpError)\n/* harmony export */ });\nclass HttpError extends Error {\n    constructor({ message, statusCode }) {\n        super(message);\n        this.name = 'HttpError';\n        this.statusCode = statusCode;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/HttpError.ts?");

/***/ }),

/***/ "./src/core/errors/http/conflict.ts":
/*!******************************************!*\
  !*** ./src/core/errors/http/conflict.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConflictError: () => (/* binding */ ConflictError)\n/* harmony export */ });\n/* harmony import */ var _HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpError */ \"./src/core/errors/http/HttpError.ts\");\n\nclass ConflictError extends _HttpError__WEBPACK_IMPORTED_MODULE_0__.HttpError {\n    constructor(message) {\n        super({\n            message: message ?? 'Conflict',\n            statusCode: 409,\n        });\n        this.name = 'Conflict';\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/conflict.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knownErrors: () => (/* binding */ knownErrors)\n/* harmony export */ });\n/* harmony import */ var _HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpError */ \"./src/core/errors/http/HttpError.ts\");\n/* harmony import */ var _internal_server_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _invalid_request_body_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n/* harmony import */ var _conflict__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conflict */ \"./src/core/errors/http/conflict.ts\");\n\n\n\n\nconst knownErrors = [\n    _HttpError__WEBPACK_IMPORTED_MODULE_0__.HttpError,\n    _internal_server_error__WEBPACK_IMPORTED_MODULE_1__.InternalServerError,\n    _invalid_request_body_error__WEBPACK_IMPORTED_MODULE_2__.InvalidRequestBodyError,\n    _conflict__WEBPACK_IMPORTED_MODULE_3__.ConflictError,\n];\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/http/knownErrors.ts?");

/***/ }),

/***/ "./src/core/errors/services/QuizService/index.ts":
/*!*******************************************************!*\
  !*** ./src/core/errors/services/QuizService/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   knownErrors: () => (/* binding */ knownErrors)\n/* harmony export */ });\n/* harmony import */ var _quiz_schema_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quiz-schema-error */ \"./src/core/errors/services/QuizService/quiz-schema-error.ts\");\n\nconst knownErrors = {\n    QuizSchemaError: _quiz_schema_error__WEBPACK_IMPORTED_MODULE_0__.QuizSchemaError,\n};\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/services/QuizService/index.ts?");

/***/ }),

/***/ "./src/core/errors/services/QuizService/quiz-schema-error.ts":
/*!*******************************************************************!*\
  !*** ./src/core/errors/services/QuizService/quiz-schema-error.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizSchemaError: () => (/* binding */ QuizSchemaError)\n/* harmony export */ });\nclass QuizSchemaError extends Error {\n    constructor(message) {\n        super(message ?? 'Quiz schema is invalid');\n        this.name = 'QuizSchemaError';\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/errors/services/QuizService/quiz-schema-error.ts?");

/***/ }),

/***/ "./src/core/responses/RepositoryResponse.ts":
/*!**************************************************!*\
  !*** ./src/core/responses/RepositoryResponse.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RepositoryResponse: () => (/* binding */ RepositoryResponse)\n/* harmony export */ });\nclass RepositoryResponse {\n    get statusCode() {\n        return this._statusCode;\n    }\n    get message() {\n        return this._message;\n    }\n    get success() {\n        return this._success;\n    }\n    get data() {\n        return this._data;\n    }\n    constructor(_props) {\n        this._statusCode = _props.statusCode;\n        this._message = _props.message;\n        this._success = RepositoryResponse.checkSuccessStatus(_props.statusCode);\n        this._data = _props.data ? _props.data : undefined;\n    }\n    static checkSuccessStatus(statusCode) {\n        return statusCode >= 200 && statusCode < 300;\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/responses/RepositoryResponse.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/CreateQuizValidation.ts":
/*!**************************************************************!*\
  !*** ./src/core/validation/zod/quiz/CreateQuizValidation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateQuizValidation: () => (/* binding */ CreateQuizValidation)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../abstraction/BaseZodValidation */ \"./src/core/abstraction/BaseZodValidation.ts\");\n/* harmony import */ var _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/services/QuizService/quiz-schema-error */ \"./src/core/errors/services/QuizService/quiz-schema-error.ts\");\n/* harmony import */ var _schema_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/question */ \"./src/core/validation/zod/quiz/schema/question.ts\");\n/* harmony import */ var _application_quiz_dtos_CreateQuizDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/application/quiz/dtos/CreateQuizDTO */ \"./src/application/quiz/dtos/CreateQuizDTO.ts\");\n\n\n\n\n\nclass CreateQuizValidation extends _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__.BaseZodValidation {\n    constructor(dto) {\n        super({\n            schema: _schema_question__WEBPACK_IMPORTED_MODULE_3__.questionSchema,\n            data: {\n                slug: dto.slug,\n                title: dto.title,\n                shortDescription: dto.shortDescription,\n                questionStatement: dto.questionStatement,\n                active: dto.active,\n                type: dto.type,\n                alternatives: dto.alternatives,\n                keywords: dto.keywords,\n            },\n        });\n    }\n    validate() {\n        try {\n            const validatedData = this.schema.parse(this.data);\n            return new _application_quiz_dtos_CreateQuizDTO__WEBPACK_IMPORTED_MODULE_4__.CreateQuizDTO(validatedData);\n        }\n        catch (error) {\n            if (error instanceof (zod__WEBPACK_IMPORTED_MODULE_0___default().ZodError)) {\n                throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError(error.message);\n            }\n            throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError('Unexpected error');\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/CreateQuizValidation.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/DeleteQuizValidation.ts":
/*!**************************************************************!*\
  !*** ./src/core/validation/zod/quiz/DeleteQuizValidation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteQuizValidation: () => (/* binding */ DeleteQuizValidation)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../abstraction/BaseZodValidation */ \"./src/core/abstraction/BaseZodValidation.ts\");\n/* harmony import */ var _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/services/QuizService/quiz-schema-error */ \"./src/core/errors/services/QuizService/quiz-schema-error.ts\");\n/* harmony import */ var _schema_deleteQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/deleteQuestion */ \"./src/core/validation/zod/quiz/schema/deleteQuestion.ts\");\n/* harmony import */ var _application_quiz_dtos_DeleteQuizDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/application/quiz/dtos/DeleteQuizDTO */ \"./src/application/quiz/dtos/DeleteQuizDTO.ts\");\n\n\n\n\n\nclass DeleteQuizValidation extends _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__.BaseZodValidation {\n    constructor(dto) {\n        super({\n            schema: _schema_deleteQuestion__WEBPACK_IMPORTED_MODULE_3__.deleteQuestionSchema,\n            data: {\n                id: dto.id,\n            },\n        });\n    }\n    validate() {\n        try {\n            const validatedData = this.schema.parse(this.data);\n            return new _application_quiz_dtos_DeleteQuizDTO__WEBPACK_IMPORTED_MODULE_4__.DeleteQuizDTO(validatedData);\n        }\n        catch (error) {\n            if (error instanceof (zod__WEBPACK_IMPORTED_MODULE_0___default().ZodError)) {\n                throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError(error.message);\n            }\n            throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError('Unexpected error');\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/DeleteQuizValidation.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/UpdateQuizValidation.ts":
/*!**************************************************************!*\
  !*** ./src/core/validation/zod/quiz/UpdateQuizValidation.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UpdateQuizValidation: () => (/* binding */ UpdateQuizValidation)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../abstraction/BaseZodValidation */ \"./src/core/abstraction/BaseZodValidation.ts\");\n/* harmony import */ var _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../errors/services/QuizService/quiz-schema-error */ \"./src/core/errors/services/QuizService/quiz-schema-error.ts\");\n/* harmony import */ var _schema_updateQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema/updateQuestion */ \"./src/core/validation/zod/quiz/schema/updateQuestion.ts\");\n/* harmony import */ var _application_quiz_dtos_UpdateQuizDTO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/application/quiz/dtos/UpdateQuizDTO */ \"./src/application/quiz/dtos/UpdateQuizDTO.ts\");\n\n\n\n\n\nclass UpdateQuizValidation extends _abstraction_BaseZodValidation__WEBPACK_IMPORTED_MODULE_1__.BaseZodValidation {\n    constructor(dto) {\n        super({\n            schema: _schema_updateQuestion__WEBPACK_IMPORTED_MODULE_3__.updateQuestionSchema,\n            data: {\n                id: dto.id,\n                slug: dto.slug,\n                title: dto.title,\n                shortDescription: dto.shortDescription,\n                questionStatement: dto.questionStatement,\n                active: dto.active,\n                type: dto.type,\n                alternatives: dto.alternatives,\n                keywords: dto.keywords,\n            },\n        });\n    }\n    validate() {\n        try {\n            const validatedData = this.schema.parse(this.data);\n            return new _application_quiz_dtos_UpdateQuizDTO__WEBPACK_IMPORTED_MODULE_4__.UpdateQuizDTO(validatedData);\n        }\n        catch (error) {\n            if (error instanceof (zod__WEBPACK_IMPORTED_MODULE_0___default().ZodError)) {\n                throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError(error.message);\n            }\n            throw new _errors_services_QuizService_quiz_schema_error__WEBPACK_IMPORTED_MODULE_2__.QuizSchemaError('Unexpected error');\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/UpdateQuizValidation.ts?");

/***/ }),

/***/ "./src/core/validation/zod/quiz/schema/deleteQuestion.ts":
/*!***************************************************************!*\
  !*** ./src/core/validation/zod/quiz/schema/deleteQuestion.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteQuestionSchema: () => (/* binding */ deleteQuestionSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n\nconst deleteQuestionSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.string().uuid(),\n});\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/schema/deleteQuestion.ts?");

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

/***/ "./src/core/validation/zod/quiz/schema/updateQuestion.ts":
/*!***************************************************************!*\
  !*** ./src/core/validation/zod/quiz/schema/updateQuestion.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateQuestionSchema: () => (/* binding */ updateQuestionSchema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _keyword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyword */ \"./src/core/validation/zod/quiz/schema/keyword.ts\");\n/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ \"./src/core/validation/zod/quiz/schema/question.ts\");\n\n\n\nconst updateQuestionSchema = zod__WEBPACK_IMPORTED_MODULE_0__.object({\n    id: zod__WEBPACK_IMPORTED_MODULE_0__.string().uuid(),\n    slug: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    title: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    shortDescription: zod__WEBPACK_IMPORTED_MODULE_0__.string().default('Sem descrição'),\n    questionStatement: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n    active: zod__WEBPACK_IMPORTED_MODULE_0__.boolean().default(false),\n    type: zod__WEBPACK_IMPORTED_MODULE_0__.nativeEnum(_question__WEBPACK_IMPORTED_MODULE_2__.QuestionType),\n    alternatives: zod__WEBPACK_IMPORTED_MODULE_0__.array(zod__WEBPACK_IMPORTED_MODULE_0__.object({\n        text: zod__WEBPACK_IMPORTED_MODULE_0__.string().min(1),\n        isCorrect: zod__WEBPACK_IMPORTED_MODULE_0__.boolean().default(false),\n    }))\n        .default([]),\n    keywords: zod__WEBPACK_IMPORTED_MODULE_0__.array(_keyword__WEBPACK_IMPORTED_MODULE_1__.keywordSchema).default([]),\n});\n\n\n//# sourceURL=webpack://node-test/./src/core/validation/zod/quiz/schema/updateQuestion.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse),\n/* harmony export */   HttpResponseHandler: () => (/* binding */ HttpResponseHandler)\n/* harmony export */ });\n/* harmony import */ var _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/errors/http/HttpError */ \"./src/core/errors/http/HttpError.ts\");\n\nclass HttpResponse {\n    constructor(props) {\n        this.knownErrors = [];\n        this.request = props.request;\n        this.reply = props.reply;\n        this.knownErrors = props.knownErrors ?? [];\n        this.controller = props.controller;\n    }\n    async execute() {\n        return new Promise(this.handleRequestError.bind(this));\n    }\n    async handleRequestError(resolve, reject) {\n        const dispatchHttpError = (error) => {\n            reject(error);\n        };\n        try {\n            await this.controller(this.request, this.reply, dispatchHttpError);\n            resolve();\n        }\n        catch (error) {\n            const isKnownError = this.knownErrors.some((errorClass) => error instanceof errorClass);\n            if (isKnownError) {\n                reject({ message: error.message, statusCode: error.statusCode });\n            }\n            reject({ message: 'Internal server error!', statusCode: 500 });\n        }\n    }\n}\nfunction HttpResponseHandler(controller, knownErrors) {\n    return async (request, reply) => {\n        try {\n            await new HttpResponse({\n                request,\n                reply,\n                knownErrors,\n                controller,\n            }).execute();\n        }\n        catch (error) {\n            console.error('Ponta do HTTP');\n            console.error('Erro conhecido:');\n            console.error(error);\n            if (error instanceof _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_0__.HttpError) {\n                console.error({\n                    message: error.message,\n                    statusCode: error.statusCode,\n                });\n                reply.status(error.statusCode).send({ message: error.message ?? '' });\n                return;\n            }\n            console.error('Erro desconhecido:');\n            reply.status(500).send({ message: 'Internal server error!' });\n        }\n    };\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/HttpResponseHandlers.ts?");

/***/ }),

/***/ "./src/infrastructure/http/controllers/private/quiz/createQuiz.ts":
/*!************************************************************************!*\
  !*** ./src/infrastructure/http/controllers/private/quiz/createQuiz.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreateQuizController: () => (/* binding */ CreateQuizController)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpController */ \"./src/infrastructure/http/HttpController.ts\");\n/* harmony import */ var _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/application/quiz/services/QuizService */ \"./src/application/quiz/services/QuizService.ts\");\n/* harmony import */ var _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/persistence/QuizRepository */ \"./src/infrastructure/persistence/QuizRepository.ts\");\n/* harmony import */ var _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/errors/http/HttpError */ \"./src/core/errors/http/HttpError.ts\");\n/* harmony import */ var _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/errors/http/internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/errors/http/invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n\n\n\n\n\n\nclass CreateQuizController extends _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__.HttpController {\n    async handler(request, reply, dispatchHttpError) {\n        const { body } = request;\n        if (typeof body !== 'object') {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_5__.InvalidRequestBodyError());\n            return;\n        }\n        const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__.QuizRepository();\n        const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.QuizService(quizRepository);\n        const { statusCode, success, message, data } = await quizService.createQuiz(body);\n        if (success) {\n            console.info({ data });\n            reply\n                .status(statusCode)\n                .send({ message: 'Quiz criado com sucesso!', data });\n            return;\n        }\n        if (statusCode === 400) {\n            dispatchHttpError(new _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__.HttpError({\n                statusCode: 400,\n                ...(typeof message === 'string' ? { message } : {}),\n            }));\n            return;\n        }\n        dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__.InternalServerError('Erro ao criar quiz!'));\n    }\n    async getTeste(_request, reply) {\n        try {\n            const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__.QuizRepository();\n            const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.QuizService(quizRepository);\n            const data = await quizService.getAll();\n            reply\n                .status(200)\n                .header('Content-Type', 'application/json; charset=utf-8')\n                .send({ data });\n        }\n        catch (error) {\n            console.error('Erro ao buscar quizzes', error);\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/controllers/private/quiz/createQuiz.ts?");

/***/ }),

/***/ "./src/infrastructure/http/controllers/private/quiz/deleteQuiz.ts":
/*!************************************************************************!*\
  !*** ./src/infrastructure/http/controllers/private/quiz/deleteQuiz.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DeleteQuizController: () => (/* binding */ DeleteQuizController)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpController */ \"./src/infrastructure/http/HttpController.ts\");\n/* harmony import */ var _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/infrastructure/persistence/QuizRepository */ \"./src/infrastructure/persistence/QuizRepository.ts\");\n/* harmony import */ var _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/application/quiz/services/QuizService */ \"./src/application/quiz/services/QuizService.ts\");\n/* harmony import */ var _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/errors/http/internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/errors/http/invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n/* harmony import */ var _application_quiz_dtos_DeleteQuizDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/application/quiz/dtos/DeleteQuizDTO */ \"./src/application/quiz/dtos/DeleteQuizDTO.ts\");\n\n\n\n\n\n\nclass DeleteQuizController extends _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__.HttpController {\n    async handler(request, reply, dispatchHttpError) {\n        const { body } = request;\n        if (typeof body !== 'object') {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestBodyError());\n            return;\n        }\n        const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_1__.QuizRepository();\n        const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_2__.QuizService(quizRepository);\n        const { statusCode, success, message } = await quizService.deleteQuiz(new _application_quiz_dtos_DeleteQuizDTO__WEBPACK_IMPORTED_MODULE_5__.DeleteQuizDTO(body));\n        if (success) {\n            reply.status(statusCode).send({ message: 'Quiz deletado com sucesso!' });\n            return;\n        }\n        if (statusCode === 400) {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestBodyError(message));\n            return;\n        }\n        console.error({ statusCode, success, message });\n        dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_3__.InternalServerError('Erro ao deletar o quiz!'));\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/controllers/private/quiz/deleteQuiz.ts?");

/***/ }),

/***/ "./src/infrastructure/http/controllers/private/quiz/getQuiz.ts":
/*!*********************************************************************!*\
  !*** ./src/infrastructure/http/controllers/private/quiz/getQuiz.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetQuizController: () => (/* binding */ GetQuizController)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpController */ \"./src/infrastructure/http/HttpController.ts\");\n/* harmony import */ var _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/application/quiz/services/QuizService */ \"./src/application/quiz/services/QuizService.ts\");\n/* harmony import */ var _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/persistence/QuizRepository */ \"./src/infrastructure/persistence/QuizRepository.ts\");\n/* harmony import */ var _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/errors/http/HttpError */ \"./src/core/errors/http/HttpError.ts\");\n/* harmony import */ var _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/errors/http/internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _application_quiz_dtos_GetQuizDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/application/quiz/dtos/GetQuizDTO */ \"./src/application/quiz/dtos/GetQuizDTO.ts\");\n\n\n\n\n\n\nclass GetQuizController extends _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__.HttpController {\n    async handler(request, reply, dispatchHttpError) {\n        try {\n            const queryParams = request.query;\n            const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_2__.QuizRepository();\n            const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_1__.QuizService(quizRepository);\n            const response = await quizService.getQuiz(new _application_quiz_dtos_GetQuizDTO__WEBPACK_IMPORTED_MODULE_5__.GetQuizDTO({\n                id: queryParams?.id ?? '',\n            }));\n            if (!response.success) {\n                if (response.statusCode === 500) {\n                    dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__.InternalServerError('Erro ao buscar quizzes'));\n                    return;\n                }\n                if (response.statusCode === 400) {\n                    dispatchHttpError(new _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__.HttpError({\n                        statusCode: 400,\n                        ...(typeof response.message === 'string'\n                            ? { message: response.message }\n                            : {}),\n                    }));\n                    return;\n                }\n                if (response.statusCode === 404) {\n                    dispatchHttpError(new _core_errors_http_HttpError__WEBPACK_IMPORTED_MODULE_3__.HttpError({\n                        statusCode: 404,\n                        ...(typeof response.message === 'string'\n                            ? { message: response.message }\n                            : {}),\n                    }));\n                    return;\n                }\n                dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__.InternalServerError('Erro ao buscar quizzes'));\n                return;\n            }\n            reply\n                .status(200)\n                .header('Content-Type', 'application/json; charset=utf-8')\n                .send({ success: true, data: response.data });\n        }\n        catch (error) {\n            console.error('Erro ao buscar quizzes', error);\n            dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_4__.InternalServerError('Erro ao buscar quizzes'));\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/controllers/private/quiz/getQuiz.ts?");

/***/ }),

/***/ "./src/infrastructure/http/controllers/private/quiz/updateQuiz.ts":
/*!************************************************************************!*\
  !*** ./src/infrastructure/http/controllers/private/quiz/updateQuiz.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UpdateQuizController: () => (/* binding */ UpdateQuizController)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpController */ \"./src/infrastructure/http/HttpController.ts\");\n/* harmony import */ var _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/infrastructure/persistence/QuizRepository */ \"./src/infrastructure/persistence/QuizRepository.ts\");\n/* harmony import */ var _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/application/quiz/services/QuizService */ \"./src/application/quiz/services/QuizService.ts\");\n/* harmony import */ var _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/errors/http/internal-server-error */ \"./src/core/errors/http/internal-server-error.ts\");\n/* harmony import */ var _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/core/errors/http/invalid-request-body-error */ \"./src/core/errors/http/invalid-request-body-error.ts\");\n/* harmony import */ var _application_quiz_dtos_UpdateQuizDTO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/application/quiz/dtos/UpdateQuizDTO */ \"./src/application/quiz/dtos/UpdateQuizDTO.ts\");\n/* harmony import */ var _core_errors_http_conflict__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/core/errors/http/conflict */ \"./src/core/errors/http/conflict.ts\");\n\n\n\n\n\n\n\nclass UpdateQuizController extends _infrastructure_http_HttpController__WEBPACK_IMPORTED_MODULE_0__.HttpController {\n    async handler(request, reply, dispatchHttpError) {\n        const { body } = request;\n        if (typeof body !== 'object') {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestBodyError());\n            return;\n        }\n        const quizRepository = new _infrastructure_persistence_QuizRepository__WEBPACK_IMPORTED_MODULE_1__.QuizRepository();\n        const quizService = new _application_quiz_services_QuizService__WEBPACK_IMPORTED_MODULE_2__.QuizService(quizRepository);\n        const { statusCode, success, message, data } = await quizService.updateQuiz(new _application_quiz_dtos_UpdateQuizDTO__WEBPACK_IMPORTED_MODULE_5__.UpdateQuizDTO(body));\n        if (success) {\n            console.info({ data });\n            reply\n                .status(statusCode)\n                .send({ message: 'Quiz atualizado com sucesso!', data });\n            return;\n        }\n        if (statusCode === 400) {\n            dispatchHttpError(new _core_errors_http_invalid_request_body_error__WEBPACK_IMPORTED_MODULE_4__.InvalidRequestBodyError(message));\n            return;\n        }\n        if (statusCode === 409) {\n            dispatchHttpError(new _core_errors_http_conflict__WEBPACK_IMPORTED_MODULE_6__.ConflictError(message));\n            return;\n        }\n        console.error({ statusCode, success, message, data });\n        dispatchHttpError(new _core_errors_http_internal_server_error__WEBPACK_IMPORTED_MODULE_3__.InternalServerError('Erro ao atualizar o quiz!'));\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/controllers/private/quiz/updateQuiz.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/apis/private/index.ts":
/*!**************************************************************!*\
  !*** ./src/infrastructure/http/routes/apis/private/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   privateRoutes: () => (/* binding */ privateRoutes)\n/* harmony export */ });\n/* harmony import */ var _infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/infrastructure/http/HttpResponseHandlers */ \"./src/infrastructure/http/HttpResponseHandlers.ts\");\n/* harmony import */ var _infrastructure_http_controllers_private_quiz_createQuiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/infrastructure/http/controllers/private/quiz/createQuiz */ \"./src/infrastructure/http/controllers/private/quiz/createQuiz.ts\");\n/* harmony import */ var _infrastructure_http_controllers_private_quiz_getQuiz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/infrastructure/http/controllers/private/quiz/getQuiz */ \"./src/infrastructure/http/controllers/private/quiz/getQuiz.ts\");\n/* harmony import */ var _infrastructure_http_controllers_private_quiz_updateQuiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/infrastructure/http/controllers/private/quiz/updateQuiz */ \"./src/infrastructure/http/controllers/private/quiz/updateQuiz.ts\");\n/* harmony import */ var _infrastructure_http_controllers_private_quiz_deleteQuiz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/infrastructure/http/controllers/private/quiz/deleteQuiz */ \"./src/infrastructure/http/controllers/private/quiz/deleteQuiz.ts\");\n/* harmony import */ var _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/core/errors/http/knownErrors */ \"./src/core/errors/http/knownErrors.ts\");\n\n\n\n\n\n\nasync function privateRoutes(app) {\n    app.post('/quiz', (0,_infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__.HttpResponseHandler)(new _infrastructure_http_controllers_private_quiz_createQuiz__WEBPACK_IMPORTED_MODULE_1__.CreateQuizController().handler, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__.knownErrors));\n    app.get('/quiz', (0,_infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__.HttpResponseHandler)(new _infrastructure_http_controllers_private_quiz_getQuiz__WEBPACK_IMPORTED_MODULE_2__.GetQuizController().handler, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__.knownErrors));\n    app.patch('/quiz', (0,_infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__.HttpResponseHandler)(new _infrastructure_http_controllers_private_quiz_updateQuiz__WEBPACK_IMPORTED_MODULE_3__.UpdateQuizController().handler, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__.knownErrors));\n    app.delete('/quiz', (0,_infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__.HttpResponseHandler)(new _infrastructure_http_controllers_private_quiz_deleteQuiz__WEBPACK_IMPORTED_MODULE_4__.DeleteQuizController().handler, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__.knownErrors));\n    app.get('/quiz/getAll', (0,_infrastructure_http_HttpResponseHandlers__WEBPACK_IMPORTED_MODULE_0__.HttpResponseHandler)(new _infrastructure_http_controllers_private_quiz_createQuiz__WEBPACK_IMPORTED_MODULE_1__.CreateQuizController().getTeste, _core_errors_http_knownErrors__WEBPACK_IMPORTED_MODULE_5__.knownErrors));\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/apis/private/index.ts?");

/***/ }),

/***/ "./src/infrastructure/http/routes/apis/registerApiRoutes.ts":
/*!******************************************************************!*\
  !*** ./src/infrastructure/http/routes/apis/registerApiRoutes.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   registerApiRoutes: () => (/* binding */ registerApiRoutes)\n/* harmony export */ });\n/* harmony import */ var _private_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/index */ \"./src/infrastructure/http/routes/apis/private/index.ts\");\n\n// import { publicRoutes } from './public/index';\nasync function registerApiRoutes(app) {\n    app\n        .register(_private_index__WEBPACK_IMPORTED_MODULE_0__.privateRoutes, {\n        prefix: '/private',\n    })\n        .addHook('preHandler', async (request, reply) => {\n        // Middleware Authentication\n        const authHeader = request?.headers?.authorization;\n        if (!authHeader || !authHeader?.startsWith('Bearer ')) {\n            reply.code(401).send('');\n            return;\n        }\n        const token = authHeader.replace('Bearer ', '');\n        if (token !== process.env.AUTH_BEARER_TOKEN) {\n            reply.code(403).send('');\n            return;\n        }\n    });\n    // app.register(privateRoutes, {\n    //   prefix: '/public',\n    // });\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/http/routes/apis/registerApiRoutes.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QuizRepository: () => (/* binding */ QuizRepository)\n/* harmony export */ });\n/* harmony import */ var _core_abstraction_BaseRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/abstraction/BaseRepository */ \"./src/core/abstraction/BaseRepository.ts\");\n/* harmony import */ var _infrastructure_persistence_PrismaClientProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/infrastructure/persistence/PrismaClientProvider */ \"./src/infrastructure/persistence/PrismaClientProvider.ts\");\n/* harmony import */ var _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/responses/RepositoryResponse */ \"./src/core/responses/RepositoryResponse.ts\");\n\n\n\nclass QuizRepository extends _core_abstraction_BaseRepository__WEBPACK_IMPORTED_MODULE_0__.BaseRepository {\n    constructor() {\n        super({\n            prismaClient: _infrastructure_persistence_PrismaClientProvider__WEBPACK_IMPORTED_MODULE_1__.PrismaClientProvider.getInstance(process.env.DATABASE_URL),\n        });\n    }\n    async getAll() {\n        try {\n            const data = await this.prisma.question.findMany({\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 200, data });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [getAll]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async create(props) {\n        try {\n            const data = await this.prisma.question.create({\n                data: {\n                    slug: props.slug,\n                    title: props.title,\n                    shortDescription: props.shortDescription,\n                    questionStatement: props.questionStatement,\n                    active: props.active,\n                    type: props.type,\n                    alternatives: {\n                        createMany: {\n                            data: props.alternatives,\n                        },\n                    },\n                    keywords: {\n                        connectOrCreate: props.keywords.map((keyword) => ({\n                            where: { text: keyword.text },\n                            create: { text: keyword.text },\n                        })),\n                    },\n                },\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                statusCode: 201,\n                data,\n            });\n        }\n        catch (error) {\n            console.error('Quiz Repository');\n            console.error('Create Quiz Error:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async update(dto) {\n        try {\n            const propsToUpdate = Object.entries(dto).reduce((acc, [key, value]) => {\n                if (value === undefined || key === 'id') {\n                    return acc;\n                }\n                if (key === 'alternatives') {\n                    const alternatives = value;\n                    if (alternatives.length) {\n                        acc[key] = {\n                            update: alternatives.map((alternative) => ({\n                                data: {\n                                    text: alternative.text,\n                                    isCorrect: alternative.isCorrect,\n                                },\n                                where: {\n                                    id: alternative.id,\n                                },\n                            })),\n                        };\n                    }\n                    return acc;\n                }\n                if (key === 'keywords') {\n                    const keywords = value;\n                    if (keywords.length) {\n                        acc[key] = {\n                            connectOrCreate: keywords.map((keyword) => ({\n                                where: { text: keyword.text },\n                                create: { text: keyword.text },\n                            })),\n                        };\n                    }\n                    return acc;\n                }\n                acc[key] = value;\n                return acc;\n            }, {});\n            const data = await this.prisma.question.update({\n                where: {\n                    id: dto.id,\n                },\n                data: propsToUpdate,\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                statusCode: 200,\n                data,\n            });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [update]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async delete(dto) {\n        try {\n            // Primeiro, remover a relação entre perguntas e palavras-chave\n            await this.prisma.$transaction(async (prisma) => {\n                // Desvincular a relação na tabela intermediária\n                await prisma.question.update({\n                    where: { id: dto.id },\n                    data: { keywords: { disconnect: [] } }, // Remove todas as associações\n                });\n                // Agora deletar as alternativas associadas\n                await prisma.alternative.deleteMany({\n                    where: { questionId: dto.id },\n                });\n                // Deletar a pergunta\n                await prisma.question.delete({\n                    where: { id: dto.id },\n                });\n                // Verificar se as keywords ficaram sem perguntas associadas\n                const orphanKeywords = await prisma.keyword.findMany({\n                    where: { questions: { none: {} } }, // Keywords sem perguntas associadas\n                });\n                if (orphanKeywords.length > 0) {\n                    const orphanKeywordIds = orphanKeywords.map((k) => k.id);\n                    await prisma.keyword.deleteMany({\n                        where: { id: { in: orphanKeywordIds } },\n                    });\n                }\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                statusCode: 200,\n            });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [delete]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async searchByQuery(query) {\n        try {\n            const data = await this.prisma.question.findMany({\n                where: {\n                    OR: [\n                        {\n                            title: {\n                                contains: query,\n                            },\n                        },\n                        {\n                            shortDescription: {\n                                contains: query,\n                            },\n                        },\n                        {\n                            questionStatement: {\n                                contains: query,\n                            },\n                        },\n                    ],\n                },\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 200, data });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [search]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async search({ props, notProps = {}, }) {\n        try {\n            if (!Object.keys(props).length) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 400 });\n            }\n            const getWhere = (_props) => {\n                return Object.entries(_props).reduce((acc, [key, value]) => {\n                    if (key === 'alternatives') {\n                        const alternatives = value;\n                        if (alternatives.length) {\n                            acc[key] = {\n                                every: {\n                                    ...alternatives[0],\n                                    AND: alternatives.slice(1),\n                                },\n                            };\n                        }\n                    }\n                    if (key === 'keywords') {\n                        const keywords = value;\n                        if (keywords.length) {\n                            acc[key] = {\n                                every: {\n                                    ...keywords[0],\n                                    AND: keywords.slice(1),\n                                },\n                            };\n                        }\n                    }\n                    acc[key] = value;\n                    return acc;\n                }, {});\n            };\n            const where = getWhere(props);\n            const data = await this.prisma.question.findMany({\n                where: {\n                    ...where,\n                    ...(Object.keys(notProps).length\n                        ? {\n                            NOT: getWhere(notProps),\n                        }\n                        : {}),\n                },\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                statusCode: 200,\n                data,\n            });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [search]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n    async findUniqueById(id) {\n        try {\n            const data = await this.prisma.question.findUnique({\n                where: {\n                    id,\n                },\n                include: {\n                    alternatives: true,\n                    keywords: true,\n                },\n            });\n            if (!data?.id?.length) {\n                return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                    statusCode: 404,\n                    message: 'Quiz não encontrado!',\n                });\n            }\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({\n                statusCode: 200,\n                data: data,\n            });\n        }\n        catch (error) {\n            console.error('Quiz Repository Error [findUniqueById]:');\n            console.error(error);\n            return new _core_responses_RepositoryResponse__WEBPACK_IMPORTED_MODULE_2__.RepositoryResponse({ statusCode: 500 });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://node-test/./src/infrastructure/persistence/QuizRepository.ts?");

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
