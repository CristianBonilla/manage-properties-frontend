import { Footer } from '@views/Footer';
import { Properties } from '@components/Properties';

function ManageProperties(..._: any[]) {
  return (
    <div className="wrapper">
      <main className="content">
        <Properties />
      </main>
      <Footer />
    </div>
  );
}

export { ManageProperties };
