import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="page-intro">
      <div className="page-wrap">
        <span className="eyebrow">Something went wrong</span>
        <h1 className="display-title">This page took <span>a wrong turn.</span></h1>
        <p>{error.statusText || error.message || 'Sorry, an unexpected error has occurred.'}</p>
        <Link className="button-primary" to="/">Back to home <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
