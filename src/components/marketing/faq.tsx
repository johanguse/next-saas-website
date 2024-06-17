import { cn } from '@/lib/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import HTMLParser from 'react-html-parser'

type FAQProps = {
  className?: string
}

const pricingFaqData = [
  {
    id: 'item-0',
    question: 'What is Next SaaS Template?',
    answer:
      'A production-ready SaaS Starter boilerplate built on Next.js. It comes fully type-safe, with authentication, billing, ready made components and more, making it a great choice for your next project. It saves you time (~200 hours) and effort, letting you focus on your business.',
  },
  {
    id: 'item-4',
    question: 'Where I can see the demo version?',
    answer:
      'Check out our demo app: <a href="https://nextsaas.app" target="_blank">https://nextsaas.app</a>.',
  },
  {
    id: 'item-1',
    question: 'Can I refund?',
    answer:
      "Once you have been granted access to the GitHub repository, I cannot offer refunds. I highly recommend browsing through our extensive documentation and checking out the demo app to ensure you understand what you're purchasing. If you have any questions, please don't hesitate to ask!",
  },
  {
    id: 'item-2',
    question: 'Can I costomize the layout or colors?',
    answer:
      'Yes, it is built with high customizability in mind. We use TailwindCSS and ShadCN for styling, giving you full control over your design, components and colors.',
  },
  {
    id: 'item-3',
    question: 'Where I can find the documentation?',
    answer:
      'Check this link: <a href="https://nextsaastemplate.com/docs" target="_blank">https://nextsaastemplate.com/docs</a>',
  },
]

export default function FAQ({ className }: FAQProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn('w-full text-left ' + className)}
    >
      {pricingFaqData.map((faqItem) => (
        <AccordionItem key={faqItem.id} value={faqItem.id}>
          <AccordionTrigger>{faqItem.question}</AccordionTrigger>
          <AccordionContent>{HTMLParser(faqItem.answer)}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
