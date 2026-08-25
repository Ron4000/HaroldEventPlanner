import './EventPlanner.css'

const eventCategories = [
  {
    title: 'Weddings',
    items: ['Wedding Ceremonies', 'Receptions', 'Engagement Parties'],
  },
  {
    title: 'Corporate Events',
    items: ['Conferences', 'Seminars', 'Team Building'],
  },
  {
    title: 'Social Events',
    items: ['Birthday Parties', 'Anniversaries', 'Graduation Parties','Inuman Sessions'],
  },
]

const features = [
  'Event Planning',
  'Venue Selection',
  'Guest Management',
  'Budget Management',
  'Event Scheduling',
  'Professional Coordination',
]

const testimonials = [
  {
    review: 'Event Planner turned our wedding vision into a seamless, joyful celebration.',
    name: 'Maria Santos',
  },
  {
    review: 'Our conference came together beautifully, and every detail stayed on schedule.',
    name: 'John Cruz',
  },
  {
    review: 'From the first idea to the final guest, the planning process felt effortless.',
    name: 'Angela Reyes',
  },
]

function EventPlanner() {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact')
    const nameInput = contactSection?.querySelector('input[name="name"]')

    contactSection?.scrollIntoView({ behavior: 'smooth' })
    nameInput?.focus({ preventScroll: true })
  }

  return (
    <div className="event-planner-container">
      <header className="site-header">
        <p className="eyebrow">Gatherings, beautifully planned</p>
        <h1>Harold's Event Planner</h1>
        <p className="subtitle">
          Bring people together and create unforgettable moments with an event thoughtfully designed around you.
        </p>
      </header>

      <main>
        <section className="description">
          <div>
            <p className="section-label">Make it meaningful</p>
            <h2>Every great event starts with a clear plan.</h2>
          </div>
          <div className="description-copy">
            <p>
              Event Planner helps you shape the details, coordinate your guests, and enjoy the moment instead of managing the chaos.
            </p>
            <button className="get-started-button" type="button" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </section>

        <section className="events_categories">
          <div className="section-heading">
            <p className="section-label">Find your occasion</p>
            <h2>Plans for every kind of gathering.</h2>
          </div>
          <div className="category-grid">
            {eventCategories.map((category) => (
              <ul key={category.title} className="category-list">
                <li className="category-title">{category.title}</li>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="section-heading">
            <p className="section-label">The details, handled</p>
            <h1>Everything you need to host with confidence.</h1>
          </div>
          <ul className="feature-list">
            {features.map((feature, index) => (
              <li key={feature}>
                <span className="feature-number">0{index + 1}</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="testimonials">
          <div className="section-heading">
            <p className="section-label">Kind words</p>
            <h2>Good events leave a lasting impression.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial" key={testimonial.name}>
                <p className="quote">“{testimonial.review}”</p>
                <p className="author">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-intro">
            <p className="section-label">Let’s plan something</p>
            <h2>Tell us what you’re imagining then  let haroldPogiCorp. do the rest.</h2>
            <p>Share a few details and our team will help you find the right next step.</p>
          </div>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Event Type
              <select name="eventType" defaultValue="">
                <option value="" disabled>Select an event type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate event</option>
                <option value="corporate">Outing ng mga barkadang laging drawing</option>
                <option value="social">Inuman session</option>
              </select>
            </label>
            <label>
              Message
              <textarea name="message" placeholder="Tell us about your event" rows="4" required></textarea>
            </label>
            <button className="submit-button" type="submit">Send Inquiry</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <strong>Event Planner</strong>
        <p>Making room for the moments that matter.</p>
        <p>haroldfulgar.com · © 2026 Event Planner</p>
      </footer>
    </div>
  )
}

export default EventPlanner
