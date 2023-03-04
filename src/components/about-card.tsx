export default function AboutCard(props: any) {
  return (
    <div className="m-15 w-80 p-10">
      <div className="text-xl font-bold">{props.label}</div>
      <div className="font-base">{props.desc}</div>
    </div>
  );
}
