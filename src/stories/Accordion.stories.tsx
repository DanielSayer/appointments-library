import { Meta, StoryObj } from "@storybook/react";
import { Accordion, IAccordionProps } from "../Components/Accordion/Accordion";
import React, { useState } from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

/**
 * The Accordion component is a Component built from reactstrap's Accordion and uses the same children elements.
 * This element differs as it allows any number of panels to be open at once.
 *
 * The children structure can be seen by clicking on show code below
 */
export default {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} as Meta;

export const Default = () => {
  const [open, setOpen] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (!open.includes(id)) {
      setOpen([...open, id]);
    } else {
      setOpen(
        open.filter((panelName) => {
          if (panelName === id) {
            return false;
          }
          return panelName;
        })
      );
    }
  };

  return (
    <div>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
          <AccordionBody accordionId="1">
            This is the first item&#39;s accordion body.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
          <AccordionBody accordionId="2">
            This is the second item&#39;s accordion body.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
          <AccordionBody accordionId="3">
            This is the third item&#39;s accordion body.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
