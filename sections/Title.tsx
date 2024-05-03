interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
}

export default function Section({ title = "Capy" }: Props) {
  return (
    <nav class="lg:container lg:mx-auto mx-4">
      <div class="lg:text-[80px] text-4xl  font-bold flex items-center justify-center w-full">{title}</div>
    </nav>
  )
  
}