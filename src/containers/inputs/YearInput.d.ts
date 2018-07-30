import * as React from 'react';

export interface YearInputProps {
    [key: string]: any;

    /**
     * Called when the user attempts to change the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: (event: React.SyntheticEvent<HTMLInputElement>, data: YearInputData) => void;

    /** Shorthand for Icon. */
    icon?: any;

    /** Position for the popup. */
    popupPosition?: 'top left' | 'top right' | 'bottom left' | 'bottom right' | 'right center' | 'left center' | 'top center' | 'bottom center';

    /** Is hoverable */
    hoverable?: boolean;

    /** A year input can be formatted to appear inline in other content. */
    inline?: boolean;

    /** Current value. Creates a controlled component. */
    value?: string;
}

export interface YearInputData extends YearInputProps {
    value: string;
}

declare class YearInput extends React.Component<YearInputProps, {}> {
}

export default YearInput;
