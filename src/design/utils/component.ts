type MapModifiersModifier = string | false | null | undefined;

function classNameArray(baseClassName: string, ...modifiers: MapModifiersModifier[]): string[] {
    const classNameArray: string[] = [];

    for (const modifier of modifiers) {
        classNameArray.push(baseClassName + '--' + modifier);
    }

    return classNameArray;
}

export function mapModifiers(baseClassName: string, ...modifiers: MapModifiersModifier[]): string {
    return (
        baseClassName +
        ' ' +
        classNameArray(baseClassName, ...modifiers)
            .join(' ')
            .trim()
    ).trim();
}
