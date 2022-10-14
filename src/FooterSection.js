function FooterSection({ name, sections }) {
  return (
    <>
      <div class="col mb-3">
        <h5 class="text-white position-relative">{name}</h5>
        <ul class="nav flex-column">
          {sections.map((s) => (
            <li class="nav-item mb-2">
              <p href="#a" class="nav-link p-0 text-light ps-2">
                {s}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FooterSection;
