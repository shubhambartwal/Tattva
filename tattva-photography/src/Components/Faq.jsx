import Faq from 'react-faq-component';

const Faqs = () => {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Where are you based? Are you open to travel for my wedding?",
                content: "We are based in Dehradun (Uttarakhand), India. We have shot weddings all over India, and are happy to travel to your wedding in any corner of India and abroad too."
            },
            {
                title: "What is the booking process?",
                content: "The booking process is very simple. You can mail us or text us for enquiries or just give us a call."
            },
            {
                title: "What are the deliverables?",
                content: "We usually deliver a cinematic trailer about 4-5 minutes and a complete wedding film whose duration is dependent on the wedding rituals. We also provide all the edited pictures of your wedding."
            },
            {
                title: "Do you offer same-day edits?",
                content: "Although we do offer same-day edits, it is not something we recommend because a hurried edit may take away from the soul of your wedding video."
            },
            {
                title: "How big is your team?",
                content: "The size of our team is decided based on the requirements of the individuals. A team of 4 is good enough to capture a wedding in its entirety but we can also get a team of 8 if the situation asks for it."
            },
            {
                title: "My wedding isn’t until next year, is it too soon to enquire?",
                content: "Since we take limited weddings each year, we are usually booked 5-6 months in advance."
            },
            {
                title: "When can we expect the delivery?",
                content: "Editing a film is a creative process and we take it very seriously. Each film goes through a series of iterations till we reach a point where we ourselves are satisfied with it. It usually takes us 20 weeks to deliver the complete wedding film based on our work schedule. For delivery of edited photos, it takes us 4 weeks."
            },
            {
                title: "What are your payment terms?",
                content: "We take 50% of the total booking amount at the time of booking. The remaining balance is due on the first day of coverage and as we deliver the finished results."
            }
        ]
    };

    return (
        <div className="bg-black text-white px-4 py-6 md:px-12 md:py-10 lg:px-24 lg:py-16">
            <div className="max-w-7xl mx-auto">
                <Faq data={ data } styles={{
                    titleTextColor: "#7d6957",
                    rowTitleColor: "white",
                    rowContentColor:"white",
                    padding:"2rem",
                    arrowColor: "white",
                   bgColor:"black"}}  />
            </div>
        </div>
    );
};

export default Faqs;
