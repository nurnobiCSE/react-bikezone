export default function QuestoinPart() {
    return (
        <div className="p-5 mt-20">
            <center>
                <h1 className="font-semibold text-5xl text-[#0A0826]">Frequently Asked <span className="text-[#E76F51]">Questions</span></h1>
            </center>
            <div className="mt-16 flex flex-row justify-center mx-auto gap-4">
                <img className="w-1/2" src="image/question/Frame.png" alt="" />
                <div className="">
                    <div className="join join-vertical w-full gap-14">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4"/>
                            <div className="collapse-title text-xl font-medium">
                            What are the most important things I should <br />know about riding a bike?
                            </div>
                            <div className="collapse-content">
                                <p className="font-normal text-base text-[#7E848C]">Safety First! Always obey the rules of the road. Obey all traffic <br /> signals, signs, and laws. Get in the mindset of “driving” your <br /> bike—not just “riding” your bike. This will help you be a more <br /> focused and legally compliant bike rider. </p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            How can I tell if my helmet is old and I need a <br />new one?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            My bike has been in storage is it safe to ride?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                            What rules should I follow when riding my bike?
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}