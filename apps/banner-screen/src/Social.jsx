export default function Social({to, icon})
{
  return <a href={to} target="_blank" tabIndex="-1" ><button>
    <img src={icon} />
  </button></a>
}
