import { NextPage } from "next";
import React from "react";
import { FaRegEnvelope, FaPhone, FaFax, FaAddressCard } from "react-icons/fa";

const About: NextPage = () => {
  return (
    <div className="my-8 hero h-full align-middle justify-center text-white">
      <div className="hero-content text-center">
        <article className="prose lg:prose-xl text-white text-justify">
          <p>
            Please contact individual restaurants using the information provided
            against each restaurant on &quot;Our Restaurants&quot;
          </p>
          <p>
            For business or supplier related enquiries, please refer these to
            Head Office at:
          </p>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar ">
                      <div className="content-center mask mask-circle bg-green-400">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaRegEnvelope className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="text-white no-underline hover:underline" href="mailto:info@friartucks.ie">info@friartucks.ie</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar ">
                      <div className="content-center mask mask-circle bg-green-400">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaPhone className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <a className="text-white no-underline hover:underline" href="tel:info@friartucks.ie">028 302 69119</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="content-center mask mask-circle bg-green-400">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaFax className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>028 302 50300</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="content-center mask mask-circle bg-green-400">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <FaAddressCard className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div>3-5 Sugar Island, Newry, BT35 6HT, Co. Down</div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
