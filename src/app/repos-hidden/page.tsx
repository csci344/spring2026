import { getPostData } from '@/lib/markdown';
import ContentLayout from '@/components/ContentLayout';
import MarkdownContent from '@/components/MarkdownContent';
import PageHeader from '@/components/PageHeader';
import QuickLinksNav from '@/components/QuickLinksNav';

export default async function ReposHiddenPage() {
  const postData = await getPostData('repos-hidden');
  const { title, excerpt, heading_max_level } = postData;

  return (
    <ContentLayout
      variant="detail-with-toc"
      leftNav={<QuickLinksNav />}
      showToc={postData.toc !== false}
      tocMaxLevel={heading_max_level || 2}
    >
      <PageHeader title={title} excerpt={excerpt} />
      <MarkdownContent content={postData.content} />
    </ContentLayout>
  );
}

