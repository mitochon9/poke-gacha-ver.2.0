import Image from "next/image";

export const MonsterBallAnimation = () => {
  return (
    <div className="flex justify-center items-center w-auto h-60">
      <Image
        src="/monsterBall.png"
        alt="モンスターボール"
        width={60}
        height={60}
        className="ball-animation"
      />
    </div>
  );
};
