// Make type and constructor private
// Without 'protected', it's public.
export class Animal {
    protected type: string;

    protected constructor(data?: any) {
        this.type = data.type;
    }
}