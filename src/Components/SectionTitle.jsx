

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-3/5 mx-auto text-center pt-24 ">
            <h3 className="text-blue-500 text-4xl font-bold my-12 uppercase">{heading}</h3>
            <p className="text-gray-600 text-xl font-medium mb-16">{subHeading}</p>
            
        </div>
    );
};

export default SectionTitle;