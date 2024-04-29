const ArchiveLayout = ({ archive, latest }) => {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive">{archive}</section>
      <section id="latest">{latest}</section>
    </div>
  );
};

export default ArchiveLayout;
