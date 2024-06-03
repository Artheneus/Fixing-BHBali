import React, { useEffect } from "react";
import { useState } from "react";

import sigil from "../assets/sigil.jpg";
import armory from "../assets/logo-armory.png";
import BH from "../assets/BH-Logo.png";
import PQ from "../assets/logo-pq.png";
import custPlay from "../assets/playmat.jpeg";
import custCase from "../assets/multi-case.png";
import multi from "../assets/multi.png";
import ImgModal from "./ImgModal";
import ImgModal3 from "./ImgModal3";
import GRE from "../assets/green.png";
import YEL from "../assets/yellow.png";
import RED from "../assets/red.png";
import BLK from "../assets/black.png";
import PLP from "../assets/purple.png";
import GRY from "../assets/grey.png";
import BLU from "../assets/blue.png";
import { productsData } from "../data/data";
import ProductPrint from "./ProdsPrint";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [showtab, setShowtab] = useState(1);

  useEffect(() => {
    showtab == 0;
  }, []);

  const handleClose = () => setShowModal(false);

  // const title = () => {
  //   productsData.map((product) => {
  //     console.log(product.title);
  //   });
  // };

  //   focus:bg-[#00df9a] focus:text-black
  const handletab = (e) => {
    setShowtab(e);
  };

  // useEffect(() => {
  //   if (setShowtab > 0) {
  //     return setShowtab();
  //   }
  // }, [setShowtab()]);

  return (
    <div id="registration" className="w-full pt-0.5 pb-0.5 bg-black">
      <div className="bg-gray-200 px-4 pt-12">
        <h1 className="font-bold text-4xl w-full justify-between text-center rounded-lg pb-3 pt-2 text-black">
          PACKAGES
        </h1>
        {/* Phone Content */}
        <div className="md:flex w-full">
          {/* Super Armory */}
          <div
            className={
              showtab === 1
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(1)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2">Super Armory</div>
            </a>
          </div>
          {/* content Super Armory */}
          <div
            className={
              showtab === 1
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <div className="w-[200px] ml-6 mb-3">
                      <img src={armory} alt="" />
                    </div>
                    <h1 className="font-bold ">Tournament Info</h1>
                    <div>
                      <ul className="px-4 mt-1 mb-1">
                        <li>Date : Friday 19 July</li>
                        <li>Time : 5.30pm open gate</li>
                        <li>Format : Blitz Constructed</li>
                        <li>
                          Eligibility : Open-entry (no invitation required){" "}
                        </li>
                        <li>REL : Casual</li>
                        <li>Player Cap : 32</li>
                        <li>Venue :</li>
                        <div className="flex">
                          <li className="font-bold">Entry fee : </li>
                          <li className="pl-2">300k idr </li>
                        </div>
                      </ul>
                    </div>

                    <div>
                      <div>
                        <h1 className="font-bold pt-2">Prizes : </h1>

                        <ul className="text-[14pt] list-disc px-8">
                          <li>3 wins : Cold Foil Armory Promo</li>
                          <li>Participation : 2x FAB Booster Packs</li>
                          <li>
                            Lucky Draw : 2x People’s Champion Playmats & 2x
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
                </div>
              </div>
            </div>
          </div>

          {/* Battle Hardened */}
          <div
            className={
              showtab === 2
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(2)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2">
                Battle Hardened
              </div>
            </a>
          </div>
          {/* content Battle Hardened */}
          <div
            className={
              showtab === 2
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <div className="w-[200px] ml-6 mb-3">
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
                          <li>Swiss rounds are 50+5 minutes in duration.</li>
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
                            Players are still expected to play at a normal pace
                            and complete playoff matches in a reasonable amount
                            of time.
                          </li>
                          <li>
                            In the Top 8, the player that finished higher in the
                            Standings during the Swiss rounds chooses either to
                            play first or second.
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h1 className="font-bold pt-2">Prizes : </h1>

                        <ul className="text-[14pt] list-disc px-8">
                          <li>
                            1st : 500 usd + BH Series Exclusive Playmat + PTI +
                            Gold Foil Legendary Black Envelope
                          </li>
                          <li>
                            2nd : 500 usd + BH Series Exclusive Playmat + PTI
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
                </div>
              </div>
            </div>
          </div>

          {/* Pro Quest+ */}
          <div
            className={
              showtab === 3
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(3)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-5">Pro Quest+</div>
            </a>
          </div>
          {/* content Pro Quest + */}
          <div
            className={
              showtab === 3
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                        Tournament Structure : Swiss rounds based on attendance,
                        cut to Top 8 players.
                      </p>
                    </div>

                    <div>
                      <div>
                        <h1 className="font-bold pt-2">Swiss Round : </h1>

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
                        <h1 className="font-bold pt-2">Top 8 : </h1>

                        <ul className="text-[14pt] list-disc px-8">
                          <li>
                            Top 8 playoff matches will have no time limit.
                          </li>
                          <li>
                            Players are still expected to play at a normal pace
                            and complete playoff matches in a reasonable amount
                            of time.
                          </li>
                          <li>
                            In the Top 8, the player that finished higher in the
                            Standings during the Swiss rounds chooses either to
                            play first or second.
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
                            2nd-4th : ProQuest RF Promo Card + BH:Bali Custom
                            Playmat
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
                </div>
              </div>
            </div>
          </div>

          {/* Side Event CC */}
          <div
            className={
              showtab === 4
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(4)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2.5">
                Side Event CC
              </div>
            </a>
          </div>
          {/* content Side Event CC */}
          <div
            className={
              showtab === 4
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                        Tournament Structure : Swiss rounds based on attendance.
                      </p>
                    </div>

                    <div>
                      <div>
                        <h1 className="font-bold pt-2">Swiss Round : </h1>

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
                        <h1 className="font-bold pt-2">Prizes : </h1>

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
                </div>
              </div>
            </div>
          </div>

          {/* Side Event Blitz */}
          <div
            className={
              showtab === 5
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(5)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2 md:pb-2.5">
                Side Event Blitz
              </div>
            </a>
          </div>
          {/* content Side Event Blitz */}
          <div
            className={
              showtab === 5
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                        Tournament Structure : Swiss rounds based on attendance.
                      </p>
                    </div>

                    <div>
                      <div>
                        <h1 className="font-bold pt-2">Swiss Round : </h1>

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
                        <h1 className="font-bold pt-2">Prizes : </h1>

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
                </div>
              </div>
            </div>
          </div>

          {/* Side Event Sealed */}
          <div
            className={
              showtab === 6
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(6)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2">
                Side Event Sealed
              </div>
            </a>
          </div>
          {/* content Side Event Sealed */}
          <div
            className={
              showtab === 6
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="md:mt-0 divide-y divide-black text-md">
                  {/* content 1 */}
                  <div>
                    <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                      {productsData.map((product, index) => {
                        if (index == showtab - 1) {
                          return <ProductPrint key={index} product={product} />;
                        } else {
                          null;
                        }
                      })}
                    </div>
                    <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Playmat */}
          <div
            className={
              showtab === 7
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(7)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-5">Playmat</div>
            </a>
          </div>
          {/* content Playmat */}
          <div
            className={
              showtab === 7
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <h1 className="font-bold ">Product Info</h1>
                    <p className="px-4 mt-2 mb-2">36x60cm rubber playmat</p>
                    <div className="w-[200px] pl-4 ml-6 mb-3">
                      <button onClick={() => setShowModal(true)}>
                        <img src={custPlay} alt="" />
                      </button>
                      <div>
                        <ImgModal
                          onClose={handleClose}
                          visible={showModal}
                          img={custPlay}
                        />
                      </div>
                    </div>
                    <div className="w-[150px] flex justify-between items-center">
                      <p>Price :</p>
                      <p className="pr-4">300k idr</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deck Case */}
          <div
            className={
              showtab === 8
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(8)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-5">Deck Case</div>
            </a>
          </div>
          {/* content Deck Case */}
          <div
            className={
              showtab === 8
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <h1 className="font-bold ">Product Info</h1>
                    <p className="px-4 mt-2 ">
                      Leather-printed magnetic hardcase
                    </p>
                    <p className="px-4 mb-2 italic">
                      For 120 double-sleeved cards or 80 Cards + 7 Mininaps
                    </p>
                    <div className="w-[250px] mb-3">
                      <button onClick={() => setShowModal(true)}>
                        <img src={custCase} alt="" />
                      </button>
                      <div>
                        <ImgModal
                          onClose={handleClose}
                          visible={showModal}
                          img={custCase}
                        />
                      </div>
                      <div className="w-[150px] flex justify-between items-center">
                        <p>Price :</p>
                        <p className="pr-4">300k idr</p>
                      </div>
                      <p>Variance : </p>
                      <div className="w-[300px]">
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={GRE}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={YEL}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={RED}
                            alt=""
                          />
                        </div>
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={BLK}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={PLP}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={GRY}
                            alt=""
                          />
                        </div>
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-4 mt-3"
                            src={BLU}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle */}
          <div
            className={
              showtab === 9
                ? "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 text-black bg-[#00df9a]"
                : "w-full font-medium md:my-2 mx-auto md:mx-0.5 py-2 my-1 bg-black text-[#00df9a]"
            }
          >
            <a
              onClick={() => handletab(9)}
              className="justify-between text-center"
            >
              <div className="text-xl justify-center md:pt-2">
                Playmat & Deck Case
              </div>
            </a>
          </div>
          {/* content Bundle */}
          <div
            className={
              showtab === 9
                ? "block w-full pl-1 pr-1 md:hidden"
                : "hidden w-full md:hidden"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md">
              {/* content 1 */}
              <div>
                <div className="w-full justify-center text-center bg-gray-400 px-4 py-2 font-medium text-black">
                  {productsData.map((product, index) => {
                    if (index == showtab - 1) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <h1 className="font-bold ">Product Info</h1>
                    <p className="px-4 mt-2 ">
                      Leather-printed magnetic hardcase and 36x60cm rubber
                      playmat
                    </p>
                    <p className="px-4 mb-2 italic">
                      For 120 double-sleeved cards or 80 Cards + 7 Mininaps
                    </p>
                    <div className="w-[250px] mb-3">
                      <button onClick={() => setShowModal(true)}>
                        <img src={multi} alt="" />
                      </button>
                      <div>
                        <ImgModal
                          onClose={handleClose}
                          visible={showModal}
                          img={multi}
                        />
                      </div>
                      <div className="w-[150px] flex justify-between items-center">
                        <p>Price :</p>
                        <p className="pr-4">550k idr</p>
                      </div>
                      <p>Variance : </p>
                      <div className="w-[300px]">
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={GRE}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={YEL}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={RED}
                            alt=""
                          />
                        </div>
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={BLK}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={PLP}
                            alt=""
                          />
                          <img
                            className="w-[100px] mx-3 mt-3"
                            src={GRY}
                            alt=""
                          />
                        </div>
                        <div className="flex justify-start">
                          <img
                            className="w-[100px] mx-4 mt-3"
                            src={BLU}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-1"></div>
        </div>

        {/* content PC*/}
        <div>
          {/* Super Armory */}
          <div
            className={
              showtab === 1
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                  {/* <span className="pt-1">Super Armory</span>

                  <p className="py-1 ml-96 pl-12">@300k Idr</p> */}
                  {productsData.map((product, index) => {
                    if (index == 0) {
                      return <ProductPrint key={index} product={product} />;
                    } else {
                      null;
                    }
                  })}
                  {/* <div>
                    <AddCart id={"1"} title={"Super Armory"} price={300000} />
                  </div> */}
                </div>
                <div className="px-4 pb-4 pt-4 bg-gray-300">
                  <div className="">
                    <h1 className="font-bold ">Tournament Info</h1>
                    <div className="flex justify-between">
                      <div>
                        <div className="px-4 mt-2 mb-2">
                          <ul>
                            <li>Date : Friday 19 July</li>
                            <li>Time : 5.30pm</li>
                            <li>Format : Blitz Constructed</li>
                            <div className="flex">
                              <h1 className="">Entry fee : </h1>
                              <p className="pl-1"> 300k idr</p>
                            </div>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual</li>
                            <li>Player Cap : 32</li>
                            <li>Venue :</li>
                            <li></li>
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
                </div>
              </div>
            </div>
          </div>

          {/* Battle Hardened */}
          <div
            //This is for buttons function in a way
            className={
              showtab === 2
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == 1) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                            <li className="">Entry fee : 800k idr </li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Competitive </li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
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
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Pro Quest+ */}
          <div
            className={
              showtab === 3
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == 2) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
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
                            <li className="">Entry fee : 550k idr</li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Competitive</li>
                            <li>Player Cap : 120</li>
                            <li>Venue :</li>
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
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Side Event CC */}
          <div
            className={
              showtab === 4
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == 3) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Saturday 20 July</li>
                            <li>Time : 1.40pm player meeting</li>
                            <li className="pl-10">: 1.45pm round 1 start</li>
                            <li>Format : Classic Constructed</li>
                            <li className="">Entry fee : 200k idr </li>
                            <li>
                              Eligibility : Open-entry (no invitation required){" "}
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
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
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Side Event Blitz */}
          <div
            className={
              showtab === 5
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == 4) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Saturday 20 July</li>
                            <li>Time : 5.00pm player meeting</li>
                            <li className="pl-10">: 5.10pm round 1 start</li>
                            <li>Format : Blitz Constructed</li>
                            <li className="">Entry fee : 200k idr </li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : 64</li>
                            <li>Venue :</li>
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
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Side Event Sealed */}
          <div
            className={
              showtab === 6
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == 5) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Tournament Info</h1>
                      <div className="px-4 mt-1 mb-2 flex justify-between">
                        <div>
                          <ul>
                            <li>Date : Sunday 21 July</li>
                            <li>Time : 2.00pm player meeting</li>
                            <li className="pl-10">: 2.10pm round 1 start</li>
                            <li>Format : MST Sealed</li>
                            <li className="">Entry fee : 600k idr </li>
                            <li>
                              Eligibility : Open-entry (no invitation required)
                            </li>
                            <li>REL : Casual </li>
                            <li>Player Cap : tbc.</li>
                            <li>Venue :</li>
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
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* BH:Bali Playmat */}
          <div
            className={
              showtab === 7
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == showtab - 1) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Product Info</h1>
                      <p className="px-4 mt-2 mb-2">35x60cm rubber playmat</p>

                      <button onClick={() => setShowModal(true)}>
                        <img
                          className="w-[400px] justify-center"
                          src={custPlay}
                          alt=""
                        />
                      </button>
                      <div>
                        <ImgModal
                          onClose={handleClose}
                          visible={showModal}
                          img={custPlay}
                        />
                      </div>
                      <div className="w-[150px] flex justify-between items-center">
                        <p>Price :</p>
                        <p className="pr-4">300k idr</p>
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Deck Case */}
          <div
            className={
              showtab === 8
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == showtab - 1) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Product Info</h1>
                      <p className="px-4 mt-2 ">
                        Leather-printed magnetic hardcase
                      </p>
                      <p className="px-4 mb-2 italic">
                        For 120 double-sleeved cards or 80 Cards + 7 Mininaps
                      </p>

                      <button onClick={() => setShowModal(true)}>
                        <img
                          className="w-[400px] justify-center pl-4"
                          src={custCase}
                          alt=""
                        />
                      </button>
                      <div>
                        <ImgModal3
                          onClose={handleClose}
                          visible={showModal}
                          img={custCase}
                        />
                      </div>
                      <div className="w-[150px] flex justify-between items-center">
                        <p>Price :</p>
                        <p className="pr-4">300k idr</p>
                      </div>
                      <p>Variance : </p>
                      <div className="flex justify-start">
                        <img className="w-[120px] mx-4 mt-3" src={GRE} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={YEL} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={RED} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={BLK} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={PLP} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={GRY} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={BLU} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>

          {/* Playmat & Deck Case */}
          <div
            className={
              showtab === 9
                ? "hidden md:block w-full pl-1 pr-1"
                : "hidden md:hidden w-full"
            }
          >
            <div className="md:mt-0 divide-y divide-black text-md pb-2">
              {/* content 1 */}
              <div>
                <>
                  <div className="flex w-full justify-between text-left bg-gray-400 px-4 py-2 font-medium ">
                    {productsData.map((product, index) => {
                      if (index == showtab - 1) {
                        return <ProductPrint key={index} product={product} />;
                      } else {
                        null;
                      }
                    })}
                  </div>
                  <div className="px-4 pb-4 pt-4 bg-gray-300">
                    <div className="">
                      <h1 className="font-bold ">Product Info</h1>
                      <p className="px-4 mt-2 ">
                        Leather-printed magnetic hardcase and 35x60cm rubber
                        playmat
                      </p>
                      <p className="px-4 mb-2 italic">
                        For 120 double-sleeved cards or 80 Cards + 7 Mininaps
                      </p>

                      <button onClick={() => setShowModal(true)}>
                        <img
                          className="w-[700px] justify-center pl-4"
                          src={multi}
                          alt=""
                        />
                      </button>
                      <div>
                        <ImgModal3
                          onClose={handleClose}
                          visible={showModal}
                          img={multi}
                        />
                      </div>
                      <div className="w-[150px] flex justify-between items-center">
                        <p>Price :</p>
                        <p className="pr-4">550k idr</p>
                      </div>
                      <p>Variance : </p>
                      <div className="flex justify-start">
                        <img className="w-[120px] mx-4 mt-3" src={GRE} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={YEL} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={RED} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={BLK} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={PLP} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={GRY} alt="" />
                        <img className="w-[120px] mx-4 mt-3" src={BLU} alt="" />
                      </div>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
