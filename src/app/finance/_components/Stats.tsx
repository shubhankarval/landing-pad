export default function Stats() {
  return (
    <div className="mt-20 flex gap-10">
      <div>
        <span className="font-sato text-3xl font-black">
          10M<span className="text-[#CBFC01]">+</span>
        </span>
        <div className="mt-5 text-[#CBFC01]">User active</div>
      </div>
      <div>
        <span className="font-sato text-3xl font-black">
          30<span className="text-[#CBFC01]">+</span>
        </span>
        <div className="mt-5 text-[#CBFC01]">Countries</div>
      </div>
      <div>
        <span className="font-sato text-3xl font-black">
          $50M<span className="text-[#CBFC01]">+</span>
        </span>
        <div className="mt-5 text-[#CBFC01]">Transactions</div>
      </div>
    </div>
  );
}
