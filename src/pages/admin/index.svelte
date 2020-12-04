<script>
  import { ready } from "@roxi/routify";
  import Api from "../../utils/api";
  import { user, userDocuments } from "../../stores";
  let posts;

  // let data = {};
  if (window.routify.inBrowser) {
    async function fetchPosts() {
      const data = await Api.get("/posts");
      posts = data;
      $ready();
    }
    $: fetchPosts();
  }
</script>

<!-- Activity table (small breakopoint and up) -->
<div class="hidden sm:block">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col mt-2">
      <div
        class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th
                class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Active Posts
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
              <th
                class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                Status
              </th>
              <th
                class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            {#if posts}
              {#each posts as post}
                <tr class="bg-white">
                  <td
                    class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div class="flex">
                      <div class="group inline-flex space-x-2 truncate text-sm">
                        <svg
                          class="flex-shrink-0 h-5 w-5 text-gray-400 "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true">
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd" />
                        </svg>
                        <p class="text-gray-500 truncate">{post.title}</p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    <a
                      href="/blog/{post.slug}"
                      target="_blank"
                      class="bg-gray-300 text-gray-500 px-2 rounded-md py-1">Preview
                      Post</a>
                    <a
                      href="/write/{post.slug}"
                      class="bg-gray-300 text-gray-500 px-2 rounded-md py-1">Edit
                      Post</a>
                  </td>
                  <td
                    class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                    <span
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                      Post
                    </span>
                  </td>
                  <td
                    class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                    {post.created_at}
                  </td>
                </tr>
              {/each}
            {:else}...{/if}
          </tbody>
        </table>

        <nav
          class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
          aria-label="Pagination">
          <div class="hidden sm:block">
            <p class="text-sm text-gray-700">
              Showing
              <span class="font-medium">1</span>
              to
              <span class="font-medium">10</span>
              of
              <span class="font-medium">20</span>
              results
            </p>
          </div>
          <div class="flex-1 flex justify-between sm:justify-end">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </a>
            <a
              href="#"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</div>
