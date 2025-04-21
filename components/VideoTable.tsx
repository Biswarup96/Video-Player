'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { VideoFile } from "./VideoPlayerApp";

interface Props {
  videos: VideoFile[];
  updateName: (id: string, name: string) => void;
}

const VideoTable = ({ videos, updateName }: Props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Video</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Edit</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {videos.map(video => (
        <TableRow key={video.id}>
          <TableCell>
            <Link href={`/video/${video.id}`} passHref>
              <video
                src={video.url}
                controls
                className="w-32 cursor-pointer rounded shadow-sm hover:scale-105 transition-transform"
              />
            </Link>
          </TableCell>
          <TableCell>{video.name}</TableCell>
          <TableCell>
            <Input
              defaultValue={video.name}
              onBlur={(e) => updateName(video.id, e.target.value)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default VideoTable;
