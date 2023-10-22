export default function Featured() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center md:text-5xl sm:text-5xl font-semibold leading-8 text-gray-900">
          Fetured Bikes In This Year
          </h2>
          <span className="mt-4 flex items-center text-center  text-[#E76F51] text-sm  justify-center">Best bike collection</span>
          <div className="w-16 h-1 bg-red-500 mx-auto"></div> <br />
          
          <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img
              className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
              src="image/featured/f1.png"
              alt="Transistor"
              width={288}
              height={243}
            />
            <img
              className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
              src="image/featured/f2.png"
              alt="Reform"
              width={230}
              height={48}
            />
            <img
              className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
              src="image/featured/f3.png"
              alt="Tuple"
              width={158}
              height={48}
            />
            
          </div>
        </div>
      </div>
    )
  }
  