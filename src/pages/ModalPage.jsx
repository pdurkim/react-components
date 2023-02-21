import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((currentShowModal) => {
      return !currentShowModal;
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="pb-10">
      <div className="flex items-center justify-between">
        <h1 className="text-8xl">Modal</h1>
        <Button primary onClick={handleClick}>
          Open Modal
        </Button>
      </div>
      {showModal && modal}
      <p className="pt-5 text-2xl leading-10">
        Welcome to my professional portfolio website. I am excited to showcase
        my skills, experience, and accomplishments in this digital space. As a
        [insert your profession], I have developed expertise in [insert your key
        skills]. With [insert number of years] years of experience in the
        industry, I have successfully completed numerous projects for clients in
        [insert relevant industries or niches]. I am passionate about delivering
        high-quality work that exceeds client expectations. In this portfolio,
        you will find a collection of my most successful projects, including
        [insert project names or descriptions]. Each project demonstrates my
        ability to [insert your key strengths], and showcases my dedication to
        providing tailored solutions for each client. I am also proud to share
        my educational background and professional certifications, including
        [insert your relevant degrees, courses or certifications]. These
        experiences have helped me build a strong foundation in [insert your
        area of expertise]. My goal is to continue growing and learning in my
        field, while delivering the best results for my clients. I am always
        open to new opportunities, so please do not hesitate to reach out if you
        think we could work together. Thank you for taking the time to visit my
        portfolio. I look forward to connecting with you soon.
      </p>
      <p className="pt-5 text-2xl leading-10">
        In addition to showcasing my past work and qualifications, I also
        believe in sharing my work process and approach. My method is to
        collaborate closely with clients to fully understand their needs,
        objectives, and target audience. I then leverage my expertise to develop
        a tailored strategy and solution to achieve their goals. My approach
        involves constant communication, frequent progress updates, and a
        commitment to delivering work on time and within budget. I pride myself
        on my professionalism, attention to detail, and commitment to delivering
        the highest quality work. I am also a strong believer in continuous
        improvement and staying up-to-date with the latest industry trends and
        technologies. I regularly attend conferences, webinars, and workshops to
        further develop my skills and knowledge, and stay informed on emerging
        trends. Thank you again for visiting my portfolio. Please feel free to
        explore my work and get in touch if you have any questions or
        opportunities to collaborate. I look forward to hearing from you soon.
      </p>
      <p className="pt-5 text-2xl leading-10">
        In addition to my professional experience, I also have a personal
        passion for [insert your personal interests or hobbies]. I believe that
        this has helped me develop a well-rounded perspective and approach to my
        work, and I enjoy exploring how these interests can inform and enrich my
        projects. Throughout my career, I have been fortunate to work with a
        diverse range of clients and collaborators. From [insert examples of
        different industries or types of clients], I have gained a wealth of
        experience and knowledge, and I am always excited to take on new
        challenges and projects. I am also dedicated to giving back to my
        community and supporting causes that are important to me. I regularly
        volunteer my time and resources to [insert your preferred causes or
        organizations], and am committed to using my skills and expertise to
        make a positive impact on the world. Thank you for taking the time to
        learn more about me and my work. I hope that my portfolio has given you
        a sense of my capabilities and approach, and that you feel inspired to
        connect with me to discuss potential opportunities for collaboration. I
        look forward to hearing from you soon.
      </p>
      <p className="py-5 text-2xl leading-10">
        Human-Computer Interaction (HCI) and User Experience (UX) are two
        closely related fields that are integral to the design of digital
        products and services. In this essay, I will explore the key concepts,
        principles, and methods of HCI and UX, and examine their importance in
        creating products that are effective, efficient, and enjoyable to use.
        HCI is a multidisciplinary field that focuses on the design and
        evaluation of computer systems and other interactive technologies. It
        draws on knowledge and methods from computer science, psychology,
        sociology, anthropology, and other fields to study how people interact
        with technology and to design systems that are user-friendly, efficient,
        and effective. HCI is concerned with all aspects of the user experience,
        from the physical design of the hardware to the layout and functionality
        of the software interface. UX, on the other hand, is a more specialized
        field that focuses specifically on the user's experience of a product or
        service. It encompasses all aspects of the user's interaction with a
        product, including their perceptions, emotions, attitudes, and
        behaviors. UX is concerned with creating products that are not only
        functional and efficient, but also enjoyable and engaging to use. It
        aims to understand the user's needs, preferences, and goals, and to
        design products that meet those needs in a way that is intuitive,
        efficient, and satisfying. The principles of HCI and UX are based on a
        deep understanding of the human mind and behavior. At the heart of both
        fields is the concept of usability, which refers to the ease with which
        a product can be used to accomplish a task. Usability is determined by a
        number of factors, including the clarity and consistency of the
        interface, the speed and accuracy of the system response, and the ease
        of learning and remembering how to use the product. Another important
        principle of HCI and UX is accessibility, which refers to the ability of
        all users, regardless of their physical or cognitive abilities, to
        access and use a product. This includes designing products that are
        compatible with assistive technologies, such as screen readers and
        magnifiers, and that use colors, fonts, and other design elements that
        are easily readable and distinguishable. The principles of HCI and UX
        are applied throughout the design process, from the initial concept and
        planning stages to the final evaluation and testing. The design process
        typically involves several key stages, including user research,
        prototyping, testing, and evaluation. In each of these stages, the
        principles of usability and accessibility are key considerations, as
        well as the need to create products that are engaging, memorable, and
        satisfying to use. User research is a critical part of the design
        process, as it provides insight into the user's needs, preferences, and
        goals. This can be accomplished through a variety of methods, including
        surveys, interviews, and usability testing. Surveys and interviews can
        help designers understand the user's demographic information, their past
        experiences with similar products, and their general attitudes and
        preferences. Usability testing, on the other hand, involves observing
        users as they interact with a prototype or early version of the product,
        and collecting feedback on its usability and effectiveness. Prototyping
        is another important stage in the design process, as it allows designers
        to test and refine their ideas before they are fully developed.
        Prototypes can be physical or digital, and can range from simple
        sketches to fully functional models. The goal of prototyping is to
        identify and resolve any usability or accessibility issues, as well as
        to refine the design and functionality of the product. Testing and
        evaluation are also critical parts of the design process, as they allow
        designers to assess the effectiveness and efficiency of their product in
        real-world conditions. This can involve a range of methods, including
        user testing, surveys, and focus groups. The goal of testing and
        evaluation is to identify any issues or problems with the product, as
        well as to collect feedback on its usability and effectiveness
      </p>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
    </div>
  );
};

export default ModalPage;
