export class WrappableText {
    private constructor(private readonly text: String) {
    }

    static create(text: String) {
        if (text == null) {
            return new WrappableText('');
        }
        return new WrappableText(text);
    }

    value(): String {
        return this.text;
    }
}
