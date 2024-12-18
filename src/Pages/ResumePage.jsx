import {FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload} from 'react-icons/fa';
import {MdModeNight, MdOutlineLightMode} from "react-icons/md";
import {useState} from "react";

const ResumePage = () => {
    const handleDownloadCV = () => {
        // open('/src/assets/Tanuj_Kandpal_Resume.pdf', '_blank')
    }
    const [mode, SetMode] = useState(false);

    function handleMode() {
        SetMode((prevMode) => !prevMode);
    }

    return (
        <div className={`min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8  ${mode ? "bg-gray-950" : "bg-blue-950"}`}>
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="md:flex">
                    <div className="p-8">
                        <div
                            className="flex items-center justify-between uppercase tracking-wide text-sm text-indigo-500 font-semibold">Software
                            Engineer
                            <div className="">
                                <button onClick={handleMode}>{mode ? <MdModeNight className="h-8 w-8 text-black"/> :
                                    <MdOutlineLightMode className="h-8 w-8 text-black"/>}</button>
                            </div>
                        </div>

                        <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Tanuj
                            Kandpal</h1>
                        <p className="mt-2 text-gray-500 flex items-center">
                            <FaMapMarkerAlt className="mr-2"/>
                            Gurugram, India
                        </p>
                        <p className="mt-4 max-w-3xl text-xl text-gray-500">
                            Experience and proficient in developing scalable and high-performance software solutions for
                            clients. Skilled with hands-on experience in React.js, HTML, CSS, JS. Adept at collaborating
                            with cross-functional teams to deliver innovative solutions that meet and exceed client
                            expectations.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            <a href="https://github.com/Tanuj-Kandpal" target="_blank" rel="noopener noreferrer"
                               className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">GitHub</span>
                                <FaGithub className="h-6 w-6"/>
                            </a>
                            <a href="https://www.linkedin.com/in/tanuj-kandpal-57186b193/" target="_blank"
                               rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <FaLinkedin className="h-6 w-6"/>
                            </a>
                            <a href="mailto:takandpal@gmail.com" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Email</span>
                                <FaEnvelope className="h-6 w-6"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-6 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
                    <div className="mt-4 space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Lead Engineer</h3>
                            <p className="text-gray-600">FIS • Oct.-2024 - Present</p>
                            <ul className="mt-2 list-disc list-inside text-gray-500">
                                <li>Led development of scalable web applications using React and Node.js</li>
                                <li>Implemented CI/CD pipelines, improving deployment efficiency by 40%</li>
                                <li>Mentored junior developers and conducted code reviews</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Associate Consultant</h3>
                            <p className="text-gray-600">Capgemini • April-2021 - Oct.-2024</p>
                            <ul className="mt-2 list-disc list-inside text-gray-500">
                                <li>Developed and maintained multiple client-facing web applications</li>
                                <li>Collaborated with UX designers to implement responsive designs</li>
                                <li>Optimized application performance, reducing load times by 30%</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-8 py-6 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['React', 'JavaScript', 'Java', 'HTML', 'CSS', 'Node.js', 'Git', 'Postman', 'RESTful APIs', 'GraphQL', 'Agile/Scrum', 'SQL', 'Selenium', 'Appium', 'Browserstack', 'Github', 'Gitlab'].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                {skill}
              </span>
                        ))}
                    </div>
                </div>

                <div className="px-8 py-6 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800">Education</h2>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-700">Uttarakhand Technical University</h3>
                        <p className="text-gray-600">2016-2020</p>
                    </div>
                </div>

                <div className="px-8 py-6 border-t border-gray-200 flex justify-center">
                    <button
                        onClick={handleDownloadCV}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center transition duration-300 ease-in-out"
                    >
                        <FaDownload className="mr-2"/>
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;

