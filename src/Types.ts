export type State = {
    day: string;
    month: string;
    year: string;
};

export type Action = {
    type: string;
    payload?: string;
};