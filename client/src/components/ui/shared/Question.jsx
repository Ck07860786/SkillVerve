import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

function Question() {
  return (
    <>
    <h1 className=' text-xl font-semibold mt-28'>FAQs</h1>
    <p className=' mt-5 text-zinc-500 mb-10'>Quick answers to common questions about SkillVerve.</p>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What is SkillVerve?</AccordionTrigger>
    <AccordionContent>
    SkillVerve is an online platform where users can offer and book one-on-one sessions to teach or learn new skills across various categories like cooking, music, programming, and photography.
    </AccordionContent>
    </AccordionItem>
   
    <AccordionItem value='item-2'>
    
        <AccordionTrigger>
        Who can become an instructor?
        </AccordionTrigger>
        <AccordionContent>
        Anyone with expertise in a particular skill can sign up to become an instructor on ShareSkill.
        </AccordionContent>

    </AccordionItem>
    <AccordionItem value='item-3'>
    <AccordionTrigger>How do I book a session?</AccordionTrigger>
    <AccordionContent>
    Browse the skills listed by instructors, choose the one that interests you, and follow the booking process to schedule a session.
    </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
    <AccordionTrigger>Is there a fee to join SkillVerve?</AccordionTrigger>
    <AccordionContent>
    Joining ShareSkill is free. However, individual session fees are set by the instructors and may vary.
    </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
    <AccordionTrigger>Can I communicate with the instructor before booking?</AccordionTrigger>
    <AccordionContent>
    Yes, you can use our built-in messaging system to communicate with instructors before booking a session.
    </AccordionContent>
    </AccordionItem>
    
    
  
</Accordion>


    </>
  )
}

export default Question