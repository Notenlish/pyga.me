export default function AboutCard(props: any) {
  return (
    <div className="w-80 m-15 p-10">
      <div className="font-bold text-xl">{props.label}</div>
      <div className="font-base">{props.desc}</div>
    </div>
  );
}
