export function Input(props:any){
    return <div>
        <input ref={props.reference} placeholder={props.placeholder} type = {"text"} className="px-4 m-2 border py-2"/>
    </div>
}