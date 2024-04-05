export default function newBlog() {
  return (
    <div className="mt-24">
      <section>
        <form>
          <label>
            name:
            <input type="text" placeholder="blog name" />
          </label>
          <label>
            text:
            <input type="text" placeholder="type here" />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
      </section>
    </div>
  );
}