// @flow
function logString(value: string) {
    console.log(value);
}

function logBoolean(value: boolean) {
    console.log(value);
}

function simple(value: string | boolean) {
    if (typeof value === 'string') {
        logString(value);
    } else if (typeof value === 'boolean') {
        logBoolean(value);
    }
}

type Action = {
    type: 'STRING_ACTION',
    value: string,
} | {
    type: 'BOOLEAN_ACTION',
    value: boolean,
}

function reduce(state: any, action: Action) {
    switch (action.type) {
        case 'STRING_ACTION':
            logString(action.value);
            break;
        case 'BOOLEAN_ACTION':
            logBoolean(action.value);
            break;
    }
}