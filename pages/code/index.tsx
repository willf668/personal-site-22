import Code from '../../pages-lib/code/Code';
import { HomePage } from '../../src/Pages';

export { getServerSideProps } from '../../utils/homeServerProps';

export default function index() {
    return (
        <HomePage>
            <Code />
        </HomePage>
    );
}
