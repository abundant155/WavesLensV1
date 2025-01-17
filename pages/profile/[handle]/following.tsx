import { Nav } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProfile, useProfileFollowing } from "@lens-protocol/react-web";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";
import { MediaRenderer } from "@thirdweb-dev/react";
import { Center, Container, Paper, Space } from "@mantine/core";

const FollowingPage = () => {
  // Get the post ID from the URL
  const router = useRouter();
  const { handle } = router.query;

  const profile = useProfile({
    handle: handle as string,
  });

  const following = useProfileFollowing({
    walletAddress: profile?.data?.ownedBy as string,
    limit: 25,
  });

  if (profile?.error) {
    return (
      <>
      <Container>
 <Paper shadow="xl" radius="md" withBorder p="xl">
        <Center>
          <h1>
            Profile not found
          </h1>
          <Space h="lg"/>
          </Center>
          <Center>
          <Button onClick={() => router.push("/")}>
            Back Home
          </Button>
        </Center>
        </Paper>
        </Container>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="w-full container flex max-w-[64rem] flex-col items-center gap-4 h-screen">
        <div className="w-full md:w-[620px]">
          {/* Profile name */}
          <h1 className="text-xl font-semibold w-auto mt-4">
            {profile?.data?.name}&rsquo;s following
          </h1>

          {/* Handle */}
          <p className="text-sm text-muted-foreground">
            @{profile?.data?.handle}
          </p>

          {!following?.loading && following?.data && (
            <InfiniteScroll
              dataLength={following?.data?.length || 0}
              next={() => following?.next()}
              hasMore={following?.hasMore}
              className="mt-4"
              loader={
                <>
                  {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton
                      className="h-[88px] animate-pulse bg-muted mt-3 w-full"
                      key={i}
                    />
                  ))}
                </>
              }
            >
              {following?.data?.map((user, key) => (
                <div
                  className="flex flex-row items-center justify-between w-full my-2"
                  key={key}
                >
                  <div
                    className="flex flex-row items-center w-full p-1 hover:cursor-pointer"
                    onClick={() => {
                      router.push(`/profile/${user?.profile?.handle}`);
                    }}
                  >
                    <MediaRenderer
                      src={
                        // @ts-ignore - this is fine, we're checking for null
                        user?.profile?.picture?.original?.url ||
                        "/user.png" ||
                        ""
                      }
                      height="48px"
                      width="48px"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex flex-col">
                      <span className="text-base font-semibold">
                        {user?.profile?.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        @{user?.profile?.handle}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
};

export default FollowingPage;
