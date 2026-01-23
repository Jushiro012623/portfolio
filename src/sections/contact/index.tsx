import data from "@/data.ts";

const Contact = () => {
    return (
        <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm text-accent uppercase tracking-widest">
                Get in Touch
            </p>
            <p className="text-center text-3xl font-bold text-primary ">
                Let's build something together!
            </p>
            <div
                className="hidden md:block relative border h-97 glass-balanced mt-14 overflow-hidden p-0!"
                style={{
                    backgroundImage: `
                        url("/assets/bg-card.svg")
                    `,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom right",
                    backgroundSize: "auto 100%",
                }}>
                <div className="p-10 w-full h-full">
                    <div className="flex items-center gap-x-3 ">
                        <img
                            src="/assets/me.jpg"
                            alt="profile"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg text-primary capitalized">
                                {data.name}
                            </p>
                            <p className="text-secondary">{data.career_role}</p>
                        </div>
                    </div>
                    <span className="block h-10 w-full"></span>
                    <div className="flex items-center gap-x-5">
                        <img
                            src="/assets/phone.svg"
                            alt="phone"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm text-accent capitalized">
                                {data.phone}
                            </p>
                        </div>
                    </div>
                    <span className="block h-5 w-full"></span>
                    <div className="flex items-center gap-x-5">
                        <img
                            src="/assets/mail.svg"
                            alt="phone"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm text-accent capitalized">
                                {data.email}
                            </p>
                        </div>
                    </div>

                    <span className="block h-5 w-full"></span>
                    <div className="flex items-center gap-x-5">
                        <img
                            src="/assets/location.svg"
                            alt="phone"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-sm text-accent capitalized">
                                {data.address}
                            </p>
                        </div>
                    </div>
                    <div className="absolute top-10 right-10">
                        <img
                            src="/assets/infinity-dev.svg"
                            alt="logo"
                            className="h-12 rounded-full object-cover "
                        />
                        <p className="text-[10px] w-full text-center mt-3">
                            BUILD YOUR DREAMS INTO REALITY
                        </p>
                    </div>
                    <div
                        className="bottom-10 right-10 absolute! px-4 py-1  gradient-4 glass-balanced overflow-hidden
                            border border-white/10">
                        <a
                            href={`mailto:${data.email}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                            text-xs text-accent hover:text-primary
                            w-full
                            flex items-center justify-center
                            py-2
                          ">
                            Send me an email
                        </a>
                    </div>
                </div>
            </div>
            {/* MOBILE */}
            <div className="block md:hidden relative border glass-balanced overflow-hidden mx-auto mt-10 w-[90%] max-w-sm h-auto p-6 rounded-2xl">
                {/* Profile Section */}
                <div className="flex flex-col items-center gap-3">
                    <img
                        src="/assets/me.jpg"
                        alt="profile"
                        className="w-24 h-24 rounded-full object-cover border-2 border-white/20"
                    />
                    <p className="text-lg text-primary font-semibold text-center">
                        {data.name}
                    </p>
                    <p className="text-secondary text-sm text-center">
                        {data.career_role}
                    </p>
                </div>

                <div className="my-4 border-t border-white/10"></div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/phone.svg"
                            alt="phone"
                            className="w-6 h-6"
                        />
                        <p className="text-sm text-accent">{data.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/mail.svg"
                            alt="email"
                            className="w-6 h-6"
                        />
                        <p className="text-sm text-accent">{data.email}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            src="/assets/location.svg"
                            alt="location"
                            className="w-6 h-6"
                        />
                        <p className="text-sm text-accent">{data.address}</p>
                    </div>
                </div>


                {/* Email Button */}
                <div className="mt-10">
                    <a
                        href={`mailto:${data.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block text-center py-3 text-xs text-accent hover:text-primary rounded-xl border border-white/10 gradient-4">
                        Send me an email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
