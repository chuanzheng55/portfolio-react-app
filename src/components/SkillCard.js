const SkillCard = ({ title, image }) => (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#ebeaeac3] h-[130px] w-[160px] md:w-[180px] lg:w-[200px]'>
      <div className='flex flex-col items-center justify-center h-full'>
        <img src={image} alt={title} className='w-16 h-16 mb-2' />
        <h3 className='text-center'>{title}</h3>
      </div>
    </div>
  );
  
  export default SkillCard;
  