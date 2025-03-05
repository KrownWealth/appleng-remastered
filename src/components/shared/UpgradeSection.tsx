
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";



const UpgradeSection = () => {

  return (
    <section className="w-full mx-auto pb-52 bg-black items-center justify-center">
      <div className="md:w-[692px] lg:w-[700px] mx-auto relative">
        <h2 className="font-sf text-4xl md:text-[64px] lg-[80px] text-[#f5f5f7] 
        font-semibold text-center leading-[1.05] tracking-[-0.015em] ">
          There&apos;s never been a better time to upgrade.
        </h2>

        <div className="flex space-x-2 items-center justify-center py-8">
          <p className="text-textGray text-xl font-sf">Select your current MacBook Pro:
          </p>
          <TooltipProvider
            delayDuration={800}
            skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger
                className="flex bg-textGray
               p-2 text-white rounded-full
               w-6 h-6 items-center justify-center ">?
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}
                className="p-4 bg-white rounded text-black">
                <p className="text-xs">
                  <span className="font-semibold">Don&apos;t know which model you have?</span>
                  Click the Apple logo in the upper left of your screen and choose About This Mac.
                  13-inch Intel-based
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="flex items-center justify-center">
          <select name="choice" id="pet-select"
            className="border border-blue-600 rounded-full p-2 px-4 bg-black text-white font-semibold ">
            <option value="13-inch-Inch-based" selected>13-inch-Inch-based</option>
            <option value="15-or-16inch-Inch-based">15-or-16inch-Inch-based</option>
            <option value="13-inch-with M1">13-inch-with M1</option>
            <option value="13-or-14inch with M1 Pro or M1 Max">13-or-14inch with M1 Pro or M1 Max</option>
          </select>

        </div>

        <div className="flex items-center justify-center pt-12 pb-6">
          <p className="text-white font-semibold text-2xl">Here&apos;s what you get with the new MacBook Pro.</p>
        </div>

      </div>

      <div className="md:w-[692px] lg:w-[700px] mx-auto relative">
        <div className="grid grid-cols-4 gap-5">
          {/* First Card - Larger (1 column, 2 rows) */}
          <div className="col-span-2 row-span-2">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <img className="object-cover h-full w-full rounded-md"
                src="https://images.unsplash.com/photo-1686918101049-d7fc95087424?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80" alt="Card Content 1" />
            </div>
          </div>

          {/* Second Card - Smaller (1 column, 1 row) */}
          <div className="col-span-1 row-span-2">
            <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
              <img className="object-cover h-full w-full rounded-md"
                src="https://images.unsplash.com/photo-1648614593495-e0955bf287e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="Card Content 2" />
            </div>
          </div>

          {/* Third Card - Smaller (1 column, 1 row) */}
          <div className="col-span-1 row-span-2">
            <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
              <img className="object-cover h-full w-full rounded-md" src="https://images.unsplash.com/photo-1687812693663-c322b9af62a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Card Content 3" />
            </div>
          </div>

          {/* Fourth Card - Larger (1 column, 2 rows) */}
          <div className="col-span-2 row-span-1">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
              <img className="object-cover h-full w-full rounded-md" src="https://images.unsplash.com/photo-1685980201821-6577f4feec1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Card Content 4" />
            </div>
          </div>
        </div>

      </div>






    </section>
  );
};

export default UpgradeSection;
