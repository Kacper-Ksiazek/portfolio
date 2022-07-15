export class CredentialsDoNotMatch extends Error {
    public readonly msg: string = "Credentials do not match any user.";
    constructor() {
        super();
    }
}

export class InvalidRequestedBody extends Error {}
export class Forbidden extends Error {}
export class SessionExpired extends Error {}
export class ValidationError extends Error {}
export class NotFound extends Error {}
export class Conflict extends Error {}
export class MethodNotAllowed extends Error {}
