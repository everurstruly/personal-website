import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

interface Props {
  data: {
    title: string;
    content: string;
  }[];
}

export function Accordion({ data }: Props) {
  return (
    <BaseAccordion type="single" collapsible className="w-full">
      {data.map((item, index) => {
        return (
          <AccordionItem key={item.content} value={`item-${index.toFixed()}`}>
            <AccordionTrigger className="text-base">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="lg:text-base">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
