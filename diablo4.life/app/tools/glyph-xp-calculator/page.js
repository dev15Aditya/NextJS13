import Image from 'next/image';
import GlyphTable from '../components/glyphTable';

export default function Page() {
  return (
    <div>
      <h1 className="text-[1.5em] text-[#fdfdfd] font-[400] my-4">
        Glyph XP Calculator
      </h1>

      <p className="text-[#bcbcbc] text-[1em]">
        Check the amount of Nightmare Dungeons you need to complete to level
        your Glyph to the desired level.
      </p>

      <div className="md:flex my-10">
        <div>
          <div className="pb-3">
            <div className="flex items-center my-3">
              <Image
                height={40}
                width={40}
                src="https://diablo4.life/_next/image?url=%2Fglyphs%2FDexterity.png&w=96&q=5"
                alt="image"
              />
              <div className="flex flex-col ml-5">
                <label
                  className="text-[0.8em] text-[#bcbcbc] mb-2"
                  htmlFor="num"
                >
                  Current glyph level
                </label>

                <select
                  name="num"
                  id="num"
                  className="outline-none rounded-lg bg-[#252630] text-[#fdfdfd] p-2 w-[110px] border-[1px] border-solid border-[#393a49] text-[11px]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div className="flex items-center my-3">
              <Image
                height={40}
                width={40}
                src="	https://diablo4.life/_next/image?url=%2Fsigils%2Fgeneric.png&w=96&q=5"
                alt=""
              />
              <div className="flex flex-col ml-5">
                <label
                  className="text-[0.8em] text-[#bcbcbc] mb-2"
                  htmlFor="num"
                >
                  Nightmare dungeon level
                </label>

                <select
                  name="num"
                  id="num"
                  className="outline-none rounded-lg bg-[#252630] text-[#fdfdfd] p-2 w-[150px] border-[1px] border-solid border-[#393a49] text-[11px]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>

          <h1 className="py-4 text-[1em] text-[#bcbcbc]">
            Leveling up a Glyph also increases its power.
          </h1>

          <h1 className="py-4 text-[1em] text-[#bcbcbc]">
            At <span className="text-[#9090fc]">level 15</span> a Glyph's range
            in the paragon board is increased by one.{' '}
          </h1>

          <h1 className="py-4 text-[1em] text-[#bcbcbc]">
            The maximum Glyph level is{' '}
            <span className="text-[#9090fc]">21</span>.
          </h1>
        </div>

        <GlyphTable />
      </div>
    </div>
  );
}
