
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center md:w-1/3 mx-auto my-8">
            <p className="text-4xl font-bold py-2">{heading}</p>
            <h3 className="mb-3">{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;