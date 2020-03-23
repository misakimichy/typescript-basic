export class Person {
    firstName: string;
    middleName: string;
    lastName: string;
    
    constructor(data?: any) {
        // Set default value using a pipe
        this.firstName = data.firstName || 'Dylan';
        this.lastName = data.lastName || 'Israel';
        this.middleName = data.middleName;    
    }
}