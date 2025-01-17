"use client";
import TypewriterComponent from "typewriter-effect";

const Typewriter = () => {
    return (
        <div className="container">
            <h1 className="h1 mb-6 mt-5">
                <TypewriterComponent
                    options={{
                        strings: ['Hello I\'m <span class="text-accent-DEAFULT">Zain</span>'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                    }}
                />
            </h1>
        </div>
    );
};

export default Typewriter;
