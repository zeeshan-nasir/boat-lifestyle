import styled from "styled-components";
import arrow from "./Images/Vector 14.png";



export default function Faq() {
    const FAQ = styled.div`
    text-align:center;
    padding:10%;
    width: 100%;
    background: #ffffff;
    & h2 {
        text-align:center;
        width: 10.48%;
        height: 61px;
        left: 23.46%;
        top: 73px;
        font-weight: bold;
        font-size: 50px;
        line-height: 61px;
        letter-spacing: 0.01em;
        color: #232323;
    }
  & div {
    text-align:center;
      top: 20%;
      left: 23.46%;
  }
    & details {
        width:60%;
        text-align:center;
        cursor: pointer;
        border-bottom: 1px solid black;
        padding-bottom: 16px;
        margin-top: 24px;
    }
    & details summary {
        text-align:center;
        list-style: none;
        width: 100%;
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.01em;
        margin-bottom: 0px;
        display: flex;
        justify-content: space-between;
    }
    & details summary img {
        width: 20px;
        height: 20px;
        margin-top: 10px;
        margin-right: 15px;
    }
    & details p {
        text-align:center;
        padding-top: 16px;
        font-size: 20px;
        color: #6a6a6a;
    }
    & .view {
        text-align:center;
        width: 100%;
    }
    & .view p {
        text-align:center;
        width: 210px;
        height: 32px;
        left: 22%;
        top: 500px;
        font-weight: 500;
        font-size: 26px;
        line-height: 32px;
        letter-spacing: 0.01em;
        color: #ff0000;
    }
    & .view img {
        margin-left: 5px;
        margin-bottom: 3px;
    }
    & .pdf {
        position: absolute;
        width: 15.46%;
        height: 46px;
        left: 580px;
        top: 670px;
        background: #797777;
        border-radius: 5px;
        display: flex;
        padding: 5px;
    }
    & .pdf p {
        position: absolute;
        width: 77.75%;
        height: 17px;
        left: 34px;
        top: 14px;
        font-weight: 600;
        font-size: 12px;
        line-height: 17px;
        color: #ffffff;
    }
    & .pdf img {
        top: 14px;
        width: 8.21%;
        height: 17.78px;
        margin-left: 7px;
        margin-top: 9px;
    }
`;
    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
    return (
        <div>
        <FAQ>
            <h2>FAQs</h2>
            <div>
                <details>
                    <summary>
                        Q. Can I use any adapter to charge my device?
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Yes, you can use any adapter to charge </p>
                </details>
                <details>
                    <summary>
                        Q. Can we Connect by Aux?
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Yes you can connect it through AUX</p>
                </details>
                <details>
                    <summary>
                        Q. Can we get a charger along with the speaker?
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Something small enough to escape casual notice.</p>
                </details>
                <details>
                    <summary>
                        Q. Does it support fast charging??
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Something small enough to escape casual notice.</p>
                </details>
                <details>
                    <summary>
                        Q. Is there a warranty for the product? How do I claim warranty?
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Yes, all of our true wireless earbuds come with a 1 year warranty.</p>
                </details>
                <details>
                    <summary>
                        Q. How can I connect with Google and Siri?
                        <img
                            src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/down-arrow_1.png?v=1616067880"
                            alt="arrow"
                        />
                    </summary>
                    <p>Yes, you can double tap to connect with Google & Siri and activate the voice assistant.</p>
                </details>
            </div>
            <div className="view">
                <p>
                    View More
                    <img src={arrow} alt="arrow" />
                </p>
            </div>
        </FAQ>
        </div>
    );
}