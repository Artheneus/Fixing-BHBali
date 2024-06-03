import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";
import sigil from "../assets/sigil.jpg";
import armory from "../assets/logo-armory.png";
import BH from "../assets/BH-Logo.png";
import PQ from "../assets/logo-pq.png";

export default function Schedule() {
  const [showtab, setShowtab] = useState(1);

  //   focus:bg-[#00df9a] focus:text-black
  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <div id="schedule" className="w-full px-4 pb-8 pt-16 bg-white">
      <div className="">
        <h1 className="font-bold text-4xl w-full justify-between text-center rounded-lg mb-2 px-4 pb-5 text-black ">
          SCHEDULE
        </h1>
        {/* button */}
        <div className="md:flex w-full">
          {/* friday */}
          <div
            className={
              showtab === 1
                ? "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            {/* w-full font-medium md:my-4 mx-auto md:mx-0 py-2 bg-black text-[#00df9a] focus:bg-[#00df9a] focus:text-black */}
            {/* "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 text-black bg-[#00df9a] peer-focus:bg-[#00df9a] peer-focus:text-black" */}
            <a
              onClick={() => handletab(1)}
              className="justify-between text-center"
            >
              {/* <div className="flex justify-center text-center">
                <div className="text-xl">Friday</div>
                <div className="text-xl pl-2">July, 19th</div>
              </div> */}
              <div className="text-xl pb-2">Friday, July 19th</div>
            </a>
          </div>

          {/* content Mobile Friday*/}
          <div
            className={
              showtab === 1
                ? "md:hidden block w-full rounded-2xl bg-white"
                : "md:hidden hidden w-full rounded-2xl bg-white"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full text-left justify-between bg-gray-300 px-4 py-2 font-medium text-black">
                      <span>17:30 PM Super Armory </span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                      <div className="">
                        <div className="w-[200px] ml-6 mb-3">
                          <img src={armory} alt="" />
                        </div>
                        <h1 className="font-bold">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Friday 19 July </li>
                            <li>Time : 5.30pm</li>
                            <li>Format : Blitz Constructed </li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : 32</li>
                            <li>Venue :</li>
                            <li>Entry fee : 300k idr </li>
                          </ul>
                        </div>

                        <div className="divide-y divide-black">
                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>3 Wins - Cold Foil Armory Promo</li>
                              <li>
                                Participation - 2x Flesh and Blood Booster Packs
                              </li>
                              <li>
                                Lucky Draw - 2x People's Champion Playmats, 2x
                                Battle Hardened: Bali Custom Playmats
                              </li>
                              <li>Top ranks : additional FAB Booster Packs</li>
                              <li>
                                Full prize structure will be announced at event
                                start
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          {/* saturday */}
          <div
            className={
              showtab === 2
                ? "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(2)}
              className="justify-between text-center"
            >
              <div className="text-xl pb-2">Saturday, July 20th</div>
            </a>
          </div>

          {/* content Mobile Saturday */}
          <div
            className={
              showtab === 2
                ? "block w-full rounded-2xl bg-white md:hidden"
                : "hidden w-full rounded-2xl bg-white md:hidden"
            }
          >
            <div className="divide-y divide-black">
              {/* content 1 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                      <span>10:00 AM Battle Hardened</span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                      <div className="">
                        <div className="w-[200px] ml-9 mb-3">
                          <img src={BH} alt="" />
                        </div>
                        <h1 className="font-bold ">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Saturday 20 July </li>
                            <li>Time : 8.00am open gate</li>
                            <li className="pl-10">: 8.45am player meeting</li>
                            <li className="pl-10">: 9.00am round 1 start</li>
                            <li>Format : Classic Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Competitive</li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
                            <div className="flex">
                              <li className="font-bold">Entry fee : </li>
                              <li className="pl-2">800k idr </li>
                            </div>
                          </ul>
                          <p className="italic text-[13pt]">
                            This event is open-entry, anyone is welcome to play!
                          </p>
                          <p className="italic text-[13pt]">
                            Decklists are required and will be collected before
                            Round 1 begins.
                          </p>
                        </div>

                        <div>
                          <div>
                            <h1 className="font-bold pt-2">Swiss Round : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>Swiss rounds are best-of-one match</li>
                              <li>
                                Swiss rounds are 50+5 minutes in duration.
                              </li>
                              <li>
                                Number of rounds is determined by the number of
                                players at the beginning of round 1.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="font-bold pt-2">Top 8 : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>
                                Top 8 playoff matches will have no time limit.
                              </li>
                              <li>
                                Players are still expected to play at a normal
                                pace and complete playoff matches in a
                                reasonable amount of time.
                              </li>
                              <li>
                                In the Top 8, the player that finished higher in
                                the Standings during the Swiss rounds chooses
                                either to play first or second.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>
                                1st : 500 usd + BH Series Exclusive Playmat +
                                PTI + Gold Foil Legendary Black Envelope
                              </li>
                              <li>
                                2nd : 500 usd + BH Series Exclusive Playmat +
                                PTI
                              </li>
                              <li>
                                3rd-4th : 250 usd + BH Series Exclusive Playmat
                              </li>
                              <li>
                                5th-8th : 125 usd + BH Series Exclusive Playmat
                              </li>
                              <li>
                                Participation : Battle Hardened Series Exclusive
                                Promo
                              </li>
                              <li>Additional prize based on attendance</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {/* content 2 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black">
                      <span>13:40 PM Side Events CC </span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                      <div className="">
                        <div className="w-[200px] pl-4 ml-6 mb-3">
                          <img src={sigil} alt="" />
                        </div>
                        <h1 className="font-bold ">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Saturday 20 July </li>
                            <li>Time : 1.40pm player meeting</li>
                            <li className="pl-10">: 1.45pm round 1 start</li>
                            <li>Format : Classic Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Casual</li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
                            <div className="flex">
                              <li className="font-bold">Entry fee : </li>
                              <li className="pl-2">200k idr </li>
                            </div>
                          </ul>
                          <p className="italic text-[13pt]">
                            Tournament Structure : Swiss rounds based on
                            attendance.
                          </p>
                        </div>

                        <div>
                          <div>
                            <h1 className="font-bold pt-2">Swiss Round : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>Swiss rounds are best-of-one match</li>
                              <li>
                                Swiss rounds are 50+5 minutes in duration.
                              </li>
                              <li>
                                Number of rounds is determined by the number of
                                players at the beginning of round 1.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>1st : Sigil of Solace Merlion Promo Card</li>
                              <li>
                                1st-2nd : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>
                                Lucky Draw : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>Participation : 2x FAB Booster Packs</li>
                              <li>Top ranks : additional FAB Booster Packs</li>
                              <li>
                                Full prize structure will be announced at event
                                start
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {/* Content 3 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                      <span>17:00 PM Side Events Blitz</span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                      <div className="">
                        <div className="w-[200px] pl-4 ml-6 mb-3">
                          <img src={sigil} alt="" />
                        </div>
                        <h1 className="font-bold ">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Saturday 20 July </li>
                            <li>Time : 5.00pm player meeting</li>
                            <li className="pl-10">: 5.10pm round 1 start</li>
                            <li>Format : Blitz Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Casual</li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
                            <div className="flex">
                              <li className="font-bold">Entry fee : </li>
                              <li className="pl-2">200k idr </li>
                            </div>
                          </ul>
                          <p className="italic text-[13pt]">
                            Tournament Structure : Swiss rounds based on
                            attendance.
                          </p>
                        </div>

                        <div>
                          <div>
                            <h1 className="font-bold pt-2">Swiss Round : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>Swiss rounds are best-of-one match</li>
                              <li>
                                Swiss rounds are 50+5 minutes in duration.
                              </li>
                              <li>
                                Number of rounds is determined by the number of
                                players at the beginning of round 1.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>1st : Sigil of Solace Merlion Promo Card</li>
                              <li>
                                1st-2nd : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>
                                Lucky Draw : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>Participation : 2x FAB Booster Packs</li>
                              <li>Top ranks : additional FAB Booster Packs</li>
                              <li>
                                Full prize structure will be announced at event
                                start
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {/* content 4 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black mb-1">
                      <span>18:00 PM</span>
                      <span className="pl-2 md:pl-3">
                        Battle Hardened Top-Cut
                      </span>
                    </Disclosure.Button>
                    {/* <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel> */}
                  </>
                )}
              </Disclosure>
            </div>
          </div>

          {/* sunday */}
          <div
            className={
              showtab === 3
                ? "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 text-black bg-[#00df9a] mb-1"
                : "w-full font-medium md:my-4 mx-auto md:mx-0 py-2 bg-black text-[#00df9a] mb-1"
            }
          >
            <a
              onClick={() => handletab(3)}
              className="justify-between text-center"
            >
              <div className="text-xl pb-2">Sunday, July 21th</div>
              {/* <div className="text-base">Open Gate: 8:00 Am</div> */}
            </a>
          </div>

          {/* content Mobile Sunday */}
          <div
            className={
              showtab === 3
                ? "block w-full rounded-2xl bg-white md:hidden"
                : "hidden w-full rounded-2xl bg-white md:hidden"
            }
          >
            <div className="divide-y divide-black">
              {/* content 1 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                      <span>10:00 AM Pro Quest+</span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                      <div className="">
                        <div className="w-[200px] ml-6 mb-3">
                          <img src={PQ} alt="" />
                        </div>
                        <h1 className="font-bold ">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Sunday 21 July</li>
                            <li>Time : 10.00am open gate</li>
                            <li className="pl-10">: 10.45am player meeting</li>
                            <li className="pl-10">: 11.00am round 1 start</li>
                            <li>Format : Blitz Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Competitive</li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
                            <div className="flex">
                              <li className="font-bold">Entry fee : </li>
                              <li className="pl-2">550k idr </li>
                            </div>
                          </ul>
                          <p className="italic text-[13pt]">
                            Tournament Structure : Swiss rounds based on
                            attendance, cut to Top 8 players.
                          </p>
                        </div>

                        <div>
                          <div>
                            <h1 className="font-bold pt-2">Swiss Round : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>Swiss rounds are best-of-one match</li>
                              <li>
                                Swiss rounds are 50+5 minutes in duration.
                              </li>
                              <li>
                                Number of rounds is determined by the number of
                                players at the beginning of round 1.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="font-bold pt-2">Top 8 : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>
                                Top 8 playoff matches will have no time limit.
                              </li>
                              <li>
                                Players are still expected to play at a normal
                                pace and complete playoff matches in a
                                reasonable amount of time.
                              </li>
                              <li>
                                In the Top 8, the player that finished higher in
                                the Standings during the Swiss rounds chooses
                                either to play first or second.
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>
                                1st : ProQuest RF Promo Card + BH:Bali Custom
                                Playmat + PTI + Gold Foil Common/Majestic Black
                                Envelope
                              </li>
                              <li>
                                2nd-4th : ProQuest RF Promo Card + BH:Bali
                                Custom Playmat
                              </li>
                              <li>5th-8th : ProQuest RF Promo Card</li>
                              <li>Participant : 3x FAB Booster Packs</li>
                              <li>
                                Full prize structure will be announced at event
                                start
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>

              {/* content 2 */}
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black">
                      <span>14:00 PM Side Events MST Sealed</span>
                      <span className="pl-2 md:pl-3"></span>
                      <FaChevronUp
                        className={
                          open
                            ? "text-black pb-2 rotate-180"
                            : "text-black pt-2"
                        }
                        size={24}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-300">
                      <div className="">
                        <div className="w-[200px] pl-4 ml-6 mb-3">
                          <img src={sigil} alt="" />
                        </div>
                        <h1 className="font-bold ">Tournament Info</h1>
                        <div>
                          <ul className="px-4 mt-1 mb-1">
                            <li>Date : Sunday 21 July</li>
                            <li>Time : 2.00pm player meeting</li>
                            <li className="pl-10">: 2.10pm round 1 start</li>
                            <li>Format : MST Sealed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Casual</li>
                            <li>Player Cap : tbc.</li>
                            <li>Venue :</li>
                            <div className="flex">
                              <li className="font-bold">Entry fee : </li>
                              <li className="pl-2">600k idr </li>
                            </div>
                          </ul>
                          <p className="italic text-[13pt]">
                            Tournament Structure : Swiss rounds based on
                            attendance.
                          </p>
                        </div>

                        <div>
                          <div>
                            <h1 className="font-bold pt-2">Swiss Round : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>Swiss rounds are best-of-one match</li>
                              <li>
                                Swiss rounds are 50+5 minutes in duration.
                              </li>
                              <li>
                                Number of rounds is determined by the number of
                                players at the beginning of round 1.
                              </li>
                            </ul>
                          </div>

                          <div>
                            <h1 className="font-bold pt-2">Prizes : </h1>

                            <ul className="text-[14pt] list-disc px-8">
                              <li>1st : Sigil of Solace Merlion Promo Card</li>
                              <li>
                                1st-2nd : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>
                                Lucky Draw : BH:Bali Custom Playmat / Deckcase
                              </li>
                              <li>Top ranks : additional FAB Booster Packs</li>
                              <li>
                                Full prize structure will be announced at event
                                start
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>

        {/* content */}
        {/* friday 19 July */}
        <div
          className={
            showtab === 1
              ? "hidden md:block w-full rounded-2xl bg-white"
              : "hidden md:hidden w-full rounded-2xl bg-white"
          }
        >
          <div className="md:mt-0 divide-y divide-black text-md">
            {/* content 1 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full text-left justify-between bg-gray-300 px-4 py-2 font-medium text-black">
                    <span>17:30 PM Super Armory </span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="flex justify-between">
                        <div>
                          <div className="px-4 mt-2 mb-2">
                            <ul>
                              <li>Date : Friday 19 July</li>
                              <li>Time : 5.30pm</li>
                              <li>Format : Blitz Constructed</li>
                              <li>
                                Eligibility : Open-entry (no invitation
                                required)
                              </li>
                              <li>REL : Casual</li>
                              <li>Player Cap : 32</li>
                              <li>Venue :</li>
                              <li>
                                <div className="flex">
                                  <h1 className="font-bold">Entry fee : </h1>
                                  <p className="pl-1"> 300k idr</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div>
                          <img
                            className="w-[600px] mr-14 mt-14"
                            src={armory}
                            alt=""
                          ></img>
                        </div>
                      </div>

                      <div className="divide-y divide-black">
                        <div>
                          <h1 className="font-bold">Prizes : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>3 wins : Cold Foil Armory Promo</li>
                            <li>Participation : 2x FAB Booster Packs</li>
                            <li>
                              Lucky Draw : 2x People's Champion Playmats & 2x
                              BH:Bali Custom Playmats (for 32 players)
                            </li>
                            <li>Top ranks : additional FAB Booster Packs</li>
                            <li>
                              Full prize structure will be announced at event
                              start
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* content 2 */}
        {/* Saturday 20 july */}
        <div
          className={
            showtab === 2
              ? "hidden md:block w-full rounded-2xl bg-white"
              : "hidden md:hidden w-full rounded-2xl bg-white"
          }
        >
          <div className="divide-y divide-black">
            {/* content 1 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                    <span>10:00 AM Battle Hardened</span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-2 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Saturday 20 July</li>
                            <li>Time : 8.00am open gate</li>
                            <li className="pl-10">: 8.45am player meeting</li>
                            <li className="pl-10">: 9.00am round 1 start </li>
                            <li>Format : Classic Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Competitive </li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
                            <li className="font-bold">Entry fee : 800k idr </li>
                          </ul>
                        </div>
                        <div>
                          <img className="w-[500px] mr-6" src={BH} alt="" />
                        </div>
                      </div>
                      <p className="text-[14pt] italic">
                        This event is open-entry, anyone is welcome to play!
                      </p>
                      <p className="text-[14pt] italic">
                        Decklists are required and will be collected before
                        Round 1 begins.
                      </p>
                      <div className="pt-2">
                        <div>
                          <h1 className="font-bold">Swiss Rounds : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>Swiss rounds are best-of-one match</li>
                            <li>Swiss rounds are 50+5 minutes in duration.</li>
                            <li>
                              Number of rounds is determined by the number of
                              players at the beginning of round 1.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Top 8 : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>
                              Top 8 playoff matches will have no time limit.
                            </li>
                            <li>
                              Players are still expected to play at a normal
                              pace and complete playoff matches in a reasonable
                              amount of time.
                            </li>
                            <li>
                              In the Top 8, the player that finished higher in
                              the Standings during the Swiss rounds chooses
                              either to play first or second.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Prize : </h1>
                          <ul className="text-[14pt] list-disc px-8">
                            <li>
                              1st : 500 usd + BH Series Exclusive Playmat + PTI
                              + Gold Foil Legendary Black Envelope
                            </li>
                            <li>
                              2nd : 500 usd + BH Series Exclusive Playmat + PTI{" "}
                            </li>
                            <li>
                              3rd-4th : 250 usd + BH Series Exclusive Playmat
                            </li>
                            <li>
                              5th-8th : 125 usd + BH Series Exclusive Playmat
                            </li>
                            <li>
                              Participation : Battle Hardened Series Exclusive
                              Promo
                            </li>
                            <li>Additional prize based on attendance</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* content 2 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black">
                    <span>13:40 PM Side Events </span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Saturday 20 July</li>
                            <li>Time : 1.40pm player meeting</li>
                            <li className="pl-10">: 1.45pm round 1 start</li>
                            <li>Format : Classic Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
                            <li className="font-bold">Entry fee : 200k idr </li>
                          </ul>
                        </div>
                        <div>
                          <img className="w-[210px] mr-36" src={sigil} alt="" />
                        </div>
                      </div>
                      <p className="text-[14pt] italic">
                        Tournament Structure : Swiss rounds based on attendance.
                      </p>

                      <div className="pt-2">
                        <div>
                          <h1 className="font-bold">Swiss Rounds : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>Swiss rounds are best-of-one match</li>
                            <li>Swiss rounds are 50+5 minutes in duration.</li>
                            <li>
                              Number of rounds is determined by the number of
                              players at the beginning of round 1.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Prize : </h1>
                          <ul className="text-[14pt] list-disc px-8">
                            <li>1st : Sigil of Solace Merlion Promo Card</li>
                            <li>1st-2nd : BH:Bali Custom Playmat / Deckcase</li>
                            <li>
                              Lucky Draw : BH:Bali Custom Playmat / Deckcase
                            </li>
                            <li>Participation : 2x FAB Booster Packs</li>
                            <li>Top ranks : additional FAB Booster Packs</li>
                            <li>
                              Full prize structure will be announced at event
                              start
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* Content 3 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                    <span>17:00 PM Side Events Blitz</span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Saturday 20 July</li>
                            <li>Time : 5.00pm player meeting</li>
                            <li className="pl-10">: 5.10pm round 1 start</li>
                            <li>Format : Blitz Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
                            <li className="font-bold">Entry fee : 200k idr </li>
                          </ul>
                        </div>
                        <div>
                          <img className="w-[210px] mr-36" src={sigil} alt="" />
                        </div>
                      </div>
                      <p className="text-[14pt] italic">
                        Tournament Structure : Swiss rounds based on attendance.
                      </p>

                      <div className="pt-2">
                        <div>
                          <h1 className="font-bold">Swiss Rounds : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>Swiss rounds are best-of-one match</li>
                            <li>Swiss rounds are 50+5 minutes in duration.</li>
                            <li>
                              Number of rounds is determined by the number of
                              players at the beginning of round 1.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Prize : </h1>
                          <ul className="text-[14pt] list-disc px-8">
                            <li>1st : Sigil of Solace Merlion Promo Card</li>
                            <li>1st-2nd : BH:Bali Custom Playmat / Deckcase</li>
                            <li>
                              Lucky Draw : BH:Bali Custom Playmat / Deckcase
                            </li>
                            <li>Participation : 2x FAB Booster Packs</li>
                            <li>Top ranks : additional FAB Booster Packs</li>
                            <li>
                              Full prize structure will be announced at event
                              start
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* content 4 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black">
                    <span>18:00 PM</span>
                    <span className="pl-2 md:pl-3">
                      Battle Hardened Top-Cut
                    </span>
                  </Disclosure.Button>
                  {/* <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel> */}
                </>
              )}
            </Disclosure>
          </div>
        </div>

        {/* content 3 */}
        {/* sunday 21 july */}
        <div
          className={
            showtab === 3
              ? "hidden md:block w-full rounded-2xl bg-white"
              : "hidden md:hidden w-full rounded-2xl bg-white"
          }
        >
          <div className="divide-y divide-black">
            {/* content 1 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left bg-gray-300 px-4 py-2 font-medium text-black">
                    <span>10:00 AM Pro Quest+</span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-2 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Sunday 21 July</li>
                            <li>Time : 10.00am open gate</li>
                            <li className="pl-10">: 10.45am player meeting</li>
                            <li className="pl-10">: 11.00am round 1 start</li>
                            <li>Format : Blitz Constructed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Competitive</li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
                            <li className="font-bold">Entry fee : 550k idr</li>
                          </ul>
                        </div>
                        <div>
                          <img
                            className="w-[600px] mr-6 mt-4"
                            src={PQ}
                            alt=""
                          />
                        </div>
                      </div>
                      <p className="text-[14pt] italic">
                        Tournament Structure : Swiss rounds based on attendance,
                        cut to Top 8 players.
                      </p>

                      <div className="pt-2">
                        <div>
                          <h1 className="font-bold">Swiss Rounds : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>Swiss rounds are best-of-one match</li>
                            <li>Swiss rounds are 50+5 minutes in duration.</li>
                            <li>
                              Number of rounds is determined by the number of
                              players at the beginning of round 1.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Top 8 : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>
                              Top 8 playoff matches will have no time limit.
                            </li>
                            <li>
                              Players are still expected to play at a normal
                              pace and complete playoff matches in a reasonable
                              amount of time.
                            </li>
                            <li>
                              In the Top 8, the player that finished higher in
                              the Standings during the Swiss rounds chooses
                              either to play first or second.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Prize : </h1>
                          <ul className="text-[14pt] list-disc px-8">
                            <li>
                              1st : ProQuest RF Promo Card + BH:Bali Custom
                              Playmat + PTI + Gold Foil Common/Majestic Black
                              Envelope
                            </li>
                            <li>
                              2nd-4th : ProQuest RF Promo Card + BH:Bali Custom
                              Playmat
                            </li>
                            <li>5th-8th : ProQuest RF Promo Card</li>
                            <li>
                              5th-8th : 125 usd + BH Series Exclusive Playmat
                            </li>
                            <li>Participantion : 3x FAB Booster Packs</li>
                            <li>Top ranks : additional FAB Booster Packs</li>
                            <li>
                              Full prize structure will be announced at event
                              start
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* content 2 */}
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium text-black">
                    <span>14:00 PM Side Events MST Sealed</span>
                    <span className="pl-2 md:pl-3"></span>
                    <FaChevronUp
                      className={
                        open ? "text-black pb-2 rotate-180" : "text-black pt-2"
                      }
                      size={24}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Sunday 21 July</li>
                            <li>Time : 2.00pm player meeting</li>
                            <li className="pl-10">: 2.10pm round 1 start</li>
                            <li>Format : MST Sealed</li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : tbc.</li>
                            <li>Venue :</li>
                            <li className="font-bold">Entry fee : 600k idr </li>
                          </ul>
                        </div>
                        <div>
                          <img className="w-[210px] mr-36" src={sigil} alt="" />
                        </div>
                      </div>
                      <p className="text-[14pt] italic">
                        Tournament Structure : Swiss rounds based on attendance.
                      </p>

                      <div className="pt-2">
                        <div>
                          <h1 className="font-bold">Swiss Rounds : </h1>

                          <ul className="text-[14pt] list-disc px-8">
                            <li>Swiss rounds are best-of-one match</li>
                            <li>Swiss rounds are 50+5 minutes in duration.</li>
                            <li>
                              Number of rounds is determined by the number of
                              players at the beginning of round 1.
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h1 className="font-bold">Prize : </h1>
                          <ul className="text-[14pt] list-disc px-8">
                            <li>1st : Sigil of Solace Merlion Promo Card</li>
                            <li>1st-2nd : BH:Bali Custom Playmat / Deckcase</li>
                            <li>
                              Lucky Draw : BH:Bali Custom Playmat / Deckcase
                            </li>
                            <li>
                              Full prize structure will be announced at event
                              start
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>

            {/* content 3 */}
            {/* <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="w-full justify-between text-left bg-gray-200 px-4 py-2 font-medium text-black">
                    <span>10:00 AM</span>
                    <span className="pl-2 md:pl-3">
                      MST World Premiere JP Only (8packs)
                    </span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 pt-4 bg-gray-200">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <p className="px-4 mt-2 mb-2">
                      Players will receive a FREE MST Pre-release Promo card for
                      participating in the event. This card will be distributed
                      only during round 1
                    </p>
                    <div className="flex">
                      <h1 className="font-bold">Entry Fee : </h1>
                      <p className="px-2">10,000 Jpy</p>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}
          </div>
        </div>
      </div>
    </div>
  );
}
