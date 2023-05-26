import React, { ReactNode } from "react";
import { Accordion as ReactAccordian } from "reactstrap";

interface IAccordionProps {
    open: string[]
    toggle: (id: string) => void
    children: ReactNode;
}

const Accordion = (props: IAccordionProps): React.ReactElement => {
    const {
        toggle,
        open,
        children
    } = props;
    return (
        //accordion toggle bug: https://github.com/reactstrap/reactstrap/issues/2165
        //@ts-ignore
        <ReactAccordian toggle={toggle} open={open}>
            {children}
        </ReactAccordian>
    );
};

export { Accordion };
export type { IAccordionProps };