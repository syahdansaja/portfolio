import { Player } from "@lottiefiles/react-lottie-player";
import LottieNotFound from "../assets/lotties/Animation - 1749115147925.json";
import { useNavigate } from "react-router";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <>
          <section style={{  
             display: 'grid',
             placeItems: 'center',
             height: '100vh',
             width: '100vw' 
          }}>
            <Player autoplay loop src={LottieNotFound} style={{ height: "55dvh"}}/>
            <div className="absolute bottom-42 flex justify-center">
                <button className="rounded py-2 px-4 text-lg hover:bg-gray-400 font-bold cursor-pointer" type="button" onClick={() => {
                    navigate(-1);
                }}>Go Back</button>
            </div>
          </section>
        </>
    )
}