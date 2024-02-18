const HomesectoinCard = ({ src, brandName, description }) => {
  return (
    <div class="card h-auto" style={{width: "18rem"}}>
    <img class="card-img-top" src={src} alt="Card image cap"/>
    <div class="card-body text-center">
      <h5 class="card-title">{brandName}</h5>
     
        <h5>{description}</h5>
     
     </div>
  </div>
  );
};

export default HomesectoinCard;
