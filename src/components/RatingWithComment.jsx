import { Typography, Avatar, Rating } from "@material-tailwind/react";
 
export function RatingWithComment() {
  return (
    <div className="mt-4 px-8 text-center ">
           <span className="block text-2xl font-extrabold text-purple-600 transition-transform transform-gpu hover:scale-125 hover:text-blue-700">
           Your opinion matters to us!
                        </span>
      <Typography variant="h6" color="blue-gray" className="mb-6 font-medium">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </Typography>
      <Avatar
        src="https://media.istockphoto.com/id/1395880805/photo/indoor-close-up-portrait-of-beauty-asian-indian-serene-young-woman-sitting-near-the-window.jpg?s=1024x1024&w=is&k=20&c=Znjjv0G06Bf5LAxpGKxqmrbW4pPH76OE7ViC5fa41_I="
        alt="image"
        size="xs"
      />
      <Typography variant="h6" className="mt-4">
        Surbihi Joshi
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Founder & CEO
      </Typography>
      <Rating value={5} readonly />
      <Typography variant="h6" color="blue-gray" className="mb-6 font-medium">
        &quot;Their team has helped me increase online visibility and gain more customers to my business.<p></p> I highly recommend their services to anyone looking forward to grow their services online.&quot;
      </Typography>
      <Avatar
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image"
        size="xs"
      />
      <Typography variant="h6" className="mt-4">
        Ankush Barjata
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        Founder --Deeva
      </Typography>
      <Rating value={5} readonly />
    </div>
  );
}